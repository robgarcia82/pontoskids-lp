import './Header.css';
import { asset } from '../lib/asset';

export default function Header() {
  return (
    <header className="pk-header">
      <div className="pk-container">
        <a href="#" className="pk-header__logo" aria-label="PontosKids" data-reveal="up">
          <img src={asset('assets/logo.svg')} width={173} height={32} alt="PontosKids" />
        </a>
      </div>
    </header>
  );
}
