import './Footer.css';
import { asset } from '../lib/asset';

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.37 12.64c.03 2.9 2.55 3.87 2.58 3.88-.02.07-.4 1.38-1.33 2.73-.8 1.17-1.63 2.33-2.94 2.35-1.29.02-1.7-.76-3.17-.76-1.47 0-1.93.74-3.15.79-1.26.05-2.22-1.26-3.03-2.42-1.65-2.38-2.9-6.72-1.21-9.65.84-1.46 2.35-2.38 3.98-2.4 1.24-.03 2.41.83 3.17.83.76 0 2.18-1.03 3.68-.88.63.03 2.39.25 3.52 1.9-.09.06-2.1 1.23-2.1 3.63ZM13.93 5.5c.67-.81 1.12-1.94.99-3.06-.96.04-2.13.64-2.82 1.45-.62.72-1.16 1.87-1.01 2.97 1.07.08 2.17-.55 2.84-1.36Z"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.6 2.4 13.2 12l-9.6 9.6c-.37-.2-.6-.6-.6-1.08V3.48c0-.48.23-.88.6-1.08Z" fill="#00d3ff" />
      <path d="m13.2 12 3.2-3.2L5.1 2.3a1.3 1.3 0 0 0-1.5.1L13.2 12Z" fill="#00f076" />
      <path d="m13.2 12-9.6 9.6c.42.23.95.24 1.5.1l11.3-6.5L13.2 12Z" fill="#f63448" />
      <path d="m16.4 8.8-3.2 3.2 3.2 3.2 3.7-2.13c1.08-.62 1.08-1.52 0-2.14L16.4 8.8Z" fill="#ffd500" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="pk-footer" id="contato">
      <div className="pk-container">
        <section className="pk-footer__cta" aria-labelledby="footer-title" data-reveal="scale">
          <picture className="pk-footer__art" aria-hidden="true">
            <source srcSet={asset('assets/familia.webp')} type="image/webp" />
            <img src={asset('assets/familia.png')} alt="" width={1178} height={1178} loading="lazy" decoding="async" />
          </picture>

          <div className="pk-footer__cta-content">
            <h2 id="footer-title" className="pk-footer__title" data-reveal="up" data-reveal-delay="150">
              Preparado para uma rotina mais tranquila?
            </h2>
            <p className="pk-footer__text" data-reveal="up" data-reveal-delay="250">
              Monte os primeiros combinados em poucos minutos. Grátis para toda a família.
            </p>

            <div className="pk-footer__stores" data-reveal="up" data-reveal-delay="350">
              <a className="pk-footer__store" href="#app-store" aria-label="Baixar na App Store">
                <AppleIcon />
                <span className="pk-footer__store-text">
                  <span className="pk-footer__store-label">Baixe na</span>
                  <span className="pk-footer__store-name">App Store</span>
                </span>
              </a>
              <a className="pk-footer__store" href="#google-play" aria-label="Disponível no Google Play">
                <PlayIcon />
                <span className="pk-footer__store-text">
                  <span className="pk-footer__store-label">Disponível no</span>
                  <span className="pk-footer__store-name">Google Play</span>
                </span>
              </a>
            </div>

            <a className="pk-footer__web-link" href="#criar-rotina" data-reveal="up" data-reveal-delay="450">
              ou crie sua rotina pela web →
            </a>
          </div>
        </section>

        <div className="pk-footer__bar">
          <div className="pk-footer__brand">
            <a href="#" aria-label="PontosKids">
              <img src={asset('assets/logo.svg')} width={140} height={26} alt="PontosKids" />
            </a>
            <span className="pk-footer__copy">© 2026 PontosKids</span>
          </div>
          <nav className="pk-footer__links" aria-label="Links do rodapé">
            <a href="#privacidade">Privacidade</a>
            <a href="#termos">Termos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
