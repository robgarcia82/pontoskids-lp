import Tag from '../components/Tag';
import './Dores.css';

const cards = [
  {
    surface: 'gray',
    icon: { src: '/assets/icon-baloes.png', width: 64, height: 48 },
    lines: ['Chega de pedir a mesma coisa várias vezes'],
    textWidth: 152,
  },
  {
    surface: 'blue',
    icon: { src: '/assets/icon-sol.png', width: 48, height: 48 },
    lines: ['De começar o dia sempre na correria'],
    textWidth: 152,
  },
  {
    surface: 'mint',
    icon: { src: '/assets/icon-mao-estrela.png', width: 51, height: 48 },
    lines: ['Dê mais autonomia,', 'sem cobrança'],
    textWidth: 169,
  },
] as const;

export default function Dores() {
  return (
    <section className="pk-dores" aria-labelledby="dores-title">
      <div className="pk-container pk-dores__inner">
        <div className="pk-dores__intro">
          <div className="pk-dores__heading">
            <div data-reveal="up">
              <Tag>Um combinado mais claro</Tag>
            </div>
            <h2 id="dores-title" className="pk-dores__title" data-reveal="up" data-reveal-delay="100">
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
              <article
                key={card.lines[0]}
                className={`pk-dores__card pk-dores__card--${card.surface}`}
                data-reveal="up"
                data-reveal-delay={150 + index * 120}
              >
                <span className="pk-dores__card-icon-float" aria-hidden="true">
                  <img
                    className="pk-dores__card-icon"
                    src={card.icon.src}
                    width={card.icon.width}
                    height={card.icon.height}
                    alt=""
                  />
                </span>
                <p className="pk-dores__card-text" style={{ maxWidth: card.textWidth }}>
                  {card.lines.map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>

          <div className="pk-dores__callout" data-reveal="up" data-reveal-delay="520">
            <p className="pk-dores__callout-before">Sai já desse videogame!</p>
            <img
              className="pk-dores__callout-arrow"
              src="/assets/icon-seta.png"
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
