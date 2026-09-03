// Gera dist-single/pontoskids.html: a LP inteira em um único arquivo (CSS, JS e imagens embutidos).
// Uso: npm run build && node scripts/build-single.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { resolve, extname } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const publicDir = resolve(root, 'public');

const mime = { '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg' };
const toDataUri = (path) => {
  const buf = readFileSync(path);
  return `data:${mime[extname(path)] ?? 'application/octet-stream'};base64,${buf.toString('base64')}`;
};

let html = readFileSync(resolve(dist, 'index.html'), 'utf8');

// 1) CSS e JS do build entram inline
html = html.replace(/<link rel="stylesheet"[^>]*href="\/(assets\/[^"?]+\.css)(?:\?[^"]*)?"[^>]*>/g, (_, p) =>
  `<style>${readFileSync(resolve(dist, p), 'utf8')}</style>`);
html = html.replace(/<script type="module"[^>]*src="\/(assets\/[^"?]+\.js)(?:\?[^"]*)?"[^>]*><\/script>/g, (_, p) =>
  `<script type="module">${readFileSync(resolve(dist, p), 'utf8').replace(/<\/script>/g, '<\\/script>')}</script>`);
html = html.replace(/<link rel="modulepreload"[^>]*>\n?/g, '');

// 2) Todas as referências a /assets/... (imagens de public/) viram data URIs
const seen = new Map();
let total = 0;
// No JS as imagens aparecem como 'assets/x.png' (asset() prefixa a base em runtime e deixa data URIs passarem).
html = html.replace(/(?<![A-Za-z0-9_\-./])\/?assets\/[A-Za-z0-9_\-./]+\.(?:png|webp|svg|jpg)/g, (match) => {
  if (seen.has(match)) return seen.get(match);
  let file = resolve(publicDir, match.replace(/^\//, ''));
  if (!existsSync(file)) return match;
  // PNG com par WebP: embute o WebP nos dois lugares (evita enviar a imagem duas vezes)
  const webpTwin = file.replace(/\.png$/, '.webp');
  if (file.endsWith('.png') && existsSync(webpTwin)) file = webpTwin;
  total += statSync(file).size;
  const uri = toDataUri(file);
  seen.set(match, uri);
  return uri;
});

// 3) O Artifact do claude.ai já fornece <html>/<head>/<body>: mantém só o conteúdo interno
const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? '';
const body = html.match(/<body>([\s\S]*?)<\/body>/)?.[1] ?? '';
const fragment = head
  .replace(/<meta charset[^>]*>\n?/, '')
  .replace(/<meta name="viewport"[^>]*>\n?/, '')
  .replace(/<title>[^<]*<\/title>/, '<title>PontosKids</title>') // nome curto para a galeria do Artifact
  .replace(/<link rel="(?:icon|apple-touch-icon)"[^>]*>\n?/g, '') // o Artifact tem favicon próprio
  .replace(/<meta name="theme-color"[^>]*>\n?/, '')
  .trim() + '\n' + body.trim();

mkdirSync(resolve(root, 'dist-single'), { recursive: true });
writeFileSync(resolve(root, 'dist-single', 'pontoskids.html'), fragment);
writeFileSync(resolve(root, 'dist-single', 'pontoskids-standalone.html'), html);
console.log(`imagens embutidas: ${seen.size} (${(total / 1024).toFixed(0)} KB originais)`);
console.log(`saída: dist-single/pontoskids.html (${(statSync(resolve(root, 'dist-single', 'pontoskids.html')).size / 1024 / 1024).toFixed(2)} MB)`);
