import { useState } from 'react';
import Tag from '../components/Tag';
import { useMediaQuery } from '../hooks/useMediaQuery';
import './Dores.css';
import { asset } from '../lib/asset';

type Card = {
  surface: 'gray' | 'blue' | 'mint';
  icon: { src: string; width: number; height: number };
  /** Frente do card: a dor, como no Figma. */
  painLines: string[];
  painWidth: number;
  /** Verso do card: como o PontosKids resolve. */
  solution: string;
};

const cards: Card[] = [
  {
    surface: 'gray',
    icon: { src: asset('assets/icon-baloes.png'), width: 64, height: 48 },
    painLines: ['Chega de pedir a mesma coisa várias vezes'],
    painWidth: 152,
    solution: 'As missões ficam no app da criança. Ela sabe o que fazer sem você repetir.',
  },
  {
    surface: 'blue',
    icon: { src: asset('assets/icon-sol.png'), width: 48, height: 48 },
    painLines: ['De começar o dia sempre na correria'],
    painWidth: 152,
    solution: 'A rotina da manhã já está montada. A criança segue os passos sozinha.',
  },
  {
    surface: 'mint',
    icon: { src: asset('assets/icon-mao-estrela.png'), width: 51, height: 48 },
    painLines: ['Dê mais autonomia,', 'sem cobrança'],
    painWidth: 169,
    solution: 'Ela marca a tarefa como feita e ganha pontos. Você só aprova.',
  },
];

function FlipCard({ card, index }: { card: Card; index: number }) {
  // Com mouse, o hover (e o foco por teclado) viram o card via CSS.
  // Sem mouse (toque), o clique alterna o estado.
  const hoverCapable = useMediaQuery('(hover: hover)');
  const [flipped, setFlipped] = useState(false);
  const toggle = () => {
    if (!hoverCapable) setFlipped((value) => !value);
  };

  return (
    <article
      className={`pk-dores__card pk-dores__card--${card.surface}${flipped ? ' is-flipped' : ''}`}
      data-reveal="up"
      data-reveal-delay={150 + index * 120}
    >
      <button
        type="button"
        className="pk-dores__card-inner"
        aria-pressed={hoverCapable ? undefined : flipped}
        aria-label={flipped ? 'Ver a dor' : 'Ver como o PontosKids resolve'}
        onClick={toggle}
      >
        <span className="pk-dores__card-face pk-dores__card-front">
          <span className="pk-dores__card-icon-float">
            <img
              className="pk-dores__card-icon"
              src={card.icon.src}
              width={card.icon.width}
              height={card.icon.height}
              alt=""
            />
          </span>
          <span className="pk-dores__card-flip-hint" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5a7 7 0 0 1 6.7 5h-2.2l3 3.5 3-3.5h-2.1A8.7 8.7 0 0 0 12 3.3 8.7 8.7 0 0 0 3.3 12h1.8A7 7 0 0 1 12 5Zm0 14a7 7 0 0 1-6.7-5h2.2l-3-3.5-3 3.5h2.1a8.7 8.7 0 0 0 8.4 6.7 8.7 8.7 0 0 0 8.7-8.7h-1.8A7 7 0 0 1 12 19Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="pk-dores__card-text" style={{ maxWidth: card.painWidth }}>
            {card.painLines.map((line, lineIndex) => (
              <span key={line}>
                {lineIndex > 0 && <br />}
                {line}
              </span>
            ))}
          </span>
        </span>

        <span className="pk-dores__card-face pk-dores__card-back">
          <span className="pk-dores__card-back-label">Com o PontosKids</span>
          <span className="pk-dores__card-back-text">{card.solution}</span>
        </span>
      </button>
    </article>
  );
}

export default function Dores() {
  return (
    <section className="pk-dores" aria-labelledby="dores-title">
      <div className="pk-container pk-dores__inner">
        <div className="pk-dores__intro">
          <div className="pk-dores__heading">
            <div data-reveal="up">
              <Tag>Um combinado mais claro</Tag>
            </div>
            <h2 id="dores-title" className="pk-dores__title pk-section-title" data-reveal="up" data-reveal-delay="100">
              Quando todo mundo sabe o que fazer, a rotina flui melhor
            </h2>
          </div>
          <p className="pk-dores__text" data-reveal="up" data-reveal-delay="200">
            O PontosKids tira as tarefas da conversa repetida e coloca o progresso na mão da
            criança
          </p>
        </div>

        <div className="pk-dores__grid">
          <div className="pk-dores__cards">
            {cards.map((card, index) => (
              <FlipCard key={card.painLines[0]} card={card} index={index} />
            ))}
          </div>

          <div className="pk-dores__callout" data-reveal="up" data-reveal-delay="520">
            <p className="pk-dores__callout-before">Sai já desse videogame!</p>
            <img
              className="pk-dores__callout-arrow"
              src={asset('assets/icon-seta.png')}
              width={56}
              height={45}
              alt=""
            />
            <p className="pk-dores__callout-after">Tarefa feita. Pontos ganhos!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
