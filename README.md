# PontosKids — Landing Page

Implementação em React + TypeScript (Vite) do frame **Desktop - 1** do Figma
([Telas · node 1011:172](https://www.figma.com/design/KkewBDwFx1EFQiXKTTa1SG/Telas?node-id=1011-172)).

## Rodar

```bash
npm install
npm run dev
```

`npm run build` gera a versão estática em `dist/`.

## Publicação

- **GitHub Pages**: todo push na branch `main` roda `.github/workflows/deploy.yml`, que faz o build com `PAGES_BASE=/pontoskids-lp/` e publica em https://robgarcia82.github.io/pontoskids-lp/.
- **Arquivo único**: `npm run build:single` gera `dist-single/pontoskids.html` (fragmento para o Artifact do claude.ai) e `dist-single/pontoskids-standalone.html` (HTML completo, com CSS, JS e imagens embutidos, para hospedar em qualquer lugar).

## Estrutura

- `src/styles/tokens.css` — tokens (cores, raios, espaçamentos, tipografia, sombras) extraídos do Figma.
- `src/styles/global.css` — reset, container responsivo (`.pk-container`, 1204px) e título de seção (`.pk-section-title`).
- `src/styles/reveal.css` + `src/hooks/useScrollReveal.ts` — fade de entrada no scroll (`data-reveal` / `data-reveal-delay`).
- `src/hooks/useMediaQuery.ts` — breakpoint e capacidade de hover em React.
- `src/components/` — `Tag`, `Button`, `CheckList` e ícones Material (`check`, `arrow_right_alt`).
- `src/sections/` — um arquivo `.tsx` + `.css` por bloco: Header, Hero, Dores, ComoFunciona, TodaFamilia, Depoimentos, BlocoFinal, Precos, Faq, Footer.
- `src/lib/asset.ts` — resolve caminhos de `public/` respeitando a base do deploy (`/pontoskids-lp/` no GitHub Pages).
- `public/assets/` — imagens e vetores (logo, fundo do hero, família, telas do app, ícones 3D). Fotos em WebP com PNG de fallback.
- `backup/sections/` — versões anteriores de seções, fora do build.
- Textos editáveis: perguntas do FAQ em `src/sections/Faq.tsx` (`items`), planos em `src/sections/Precos.tsx` (`plans`), depoimentos em `src/sections/Depoimentos.tsx` (`testimonials`).

## Layout responsivo

Container central de 1204px (margens de 118px em 1440, como no Figma) com gutter mínimo de 24px.
Breakpoints: até 1251px (tablet largo), até 1023px (tablet) e até 767px (mobile).
O fundo azul do hero é full-bleed. As cenas ilustradas (hero e bloco final) escalam como um bloco só.

## Telas do bloco "Como funciona"

Os passos 01, 02 e 03 são clicáveis e trocam a imagem do celular. As telas ficam em
`public/assets/steps/` como `step-01`, `step-02`, `step-03` (PNG + WebP).
`placeholder.*` é a tela exibida no desktop antes do primeiro clique; no mobile e tablet
o passo 01 já começa selecionado, então o placeholder não aparece.
Para trocar uma tela, exporte no Figma o frame **iPhone 14 Pro Max** em PNG 2x (923×1654, com a sombra)
e gere o WebP a partir dele. Os textos de cada passo ficam no array `steps` em `src/sections/ComoFunciona.tsx`.
