import { useEffect } from 'react';

const REVEAL_DURATION_MS = 700;

/**
 * Faz cada elemento marcado com `data-reveal` aparecer em fade quando entra na viewport.
 *
 * - `data-reveal="up" | "scale" | "left" | "right"` define a direção do movimento.
 * - `data-reveal-delay="120"` atrasa a animação (ms) para escalonar elementos irmãos.
 *
 * Depois de revelado, o atributo é removido para que os hovers/transições próprias
 * do elemento voltem a valer normalmente.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (elements.length === 0) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.removeAttribute('data-reveal'));
      return;
    }

    const timers = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);

          el.style.transitionDelay = `${delay}ms`;
          // Atributo (e não classe): React reescreve className em re-renders e apagaria a marca.
          el.setAttribute('data-revealed', '');
          observer.unobserve(el);

          const timer = window.setTimeout(() => {
            el.removeAttribute('data-reveal');
            el.removeAttribute('data-revealed');
            el.style.transitionDelay = '';
            timers.delete(timer);
          }, REVEAL_DURATION_MS + delay + 50);
          timers.add(timer);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);
}
