// Pós-build: acrescenta ?v=<versão> ao CSS/JS referenciados em dist/index.html.
// Os nomes de arquivo são estáveis (sem hash); a query garante que um HTML novo nunca
// receba um asset antigo de cache (GitHub Pages, Vercel ou navegador).
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';

const html = resolve(import.meta.dirname, '..', 'dist', 'index.html');
let version = process.env.GITHUB_SHA ?? process.env.VERCEL_GIT_COMMIT_SHA ?? '';
if (!version) {
  try { version = execSync('git rev-parse HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { version = String(Date.now()); }
}
version = version.slice(0, 8);
const out = readFileSync(html, 'utf8').replace(/(assets\/[A-Za-z0-9_-]+\.(?:js|css))"/g, `$1?v=${version}"`);
writeFileSync(html, out);
console.log(`assets versionados: ?v=${version}`);
