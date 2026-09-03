import { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import './StickyCta.css';

const SHOW_AFTER_PX = 1; // aparece ao menor scroll

/**
 * Botão fixo na base da tela, só no mobile. Aparece depois de rolar um pouco
 * e some quando o footer (que já tem sua própria chamada) entra na tela.
 */
export default function StickyCta() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    if (!isMobile) return;
    const onScroll = () => setScrolled(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const footer = document.querySelector('.pk-footer');
    let observer: IntersectionObserver | undefined;
    if (footer && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => setFooterVisible(entries.some((entry) => entry.isIntersecting)),
        { rootMargin: '0px 0px -80px 0px' },
      );
      observer.observe(footer);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, [isMobile]);

  if (!isMobile) return null;
  const visible = scrolled && !footerVisible;

  return (
    <div className={`pk-sticky-cta${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <a className="pk-sticky-cta__button" href="#criar-rotina" tabIndex={visible ? 0 : -1}>
        Criar minha rotina grátis
      </a>
    </div>
  );
}
