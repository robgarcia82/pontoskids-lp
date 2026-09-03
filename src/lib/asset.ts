/**
 * Resolve um arquivo de public/ respeitando a base do deploy (ex.: /pontoskids-lp/ no GitHub Pages).
 * Data URIs (build de arquivo único) passam direto.
 */
export const asset = (path: string): string =>
  path.startsWith('data:') ? path : `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
