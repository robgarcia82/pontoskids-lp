import CheckList from '../components/CheckList';
import './BlocoFinal.css';
import { asset } from '../lib/asset';

/** Itens 3D que flutuam ao redor da ilustração (posições em BlocoFinal.css). */
const decorations = [
  { name: 'heart', src: asset('assets/final-heart.png'), width: 87, height: 83 },
  { name: 'star', src: asset('assets/final-star.png'), width: 81, height: 77 },
  { name: 'board', src: asset('assets/final-board.png'), width: 163, height: 185 },
  { name: 'check', src: asset('assets/final-check.png'), width: 65, height: 64 },
];

export default function BlocoFinal() {
  return (
    <section className="pk-final-section" id="criar-rotina" aria-labelledby="final-title">
      <div className="pk-container">
        <div className="pk-final" data-reveal="scale">
          <div className="pk-final__figure">
            <div className="pk-final__scene" data-reveal="scale" data-reveal-delay="250">
              <picture>
                <source srcSet={asset('assets/familia-final.webp')} type="image/webp" />
                <img
                  data-reveal="left"
                  data-reveal-delay="250"
                  className="pk-final__image"
                  src={asset('assets/familia-final.png')}
                  width={391}
                  height={466}
                  alt="Mãe ajoelhada ao lado do filho, apontando para ele com carinho"
                />
              </picture>
              {decorations.map((item) => (
                <img
                  key={item.src}
                  className={`pk-final__deco pk-final__deco--${item.name}`}
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt=""
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
          <div className="pk-final__content">
            <h2 id="final-title" className="pk-final__title" data-reveal="up" data-reveal-delay="300">
              Recompensas, regras e permissões sempre definidas pelos responsáveis.
            </h2>
            <div data-reveal="up" data-reveal-delay="450">
            <CheckList
              tone="inverse"
              color="var(--pk-color-on-primary)"
              items={['Sem punição', 'Sem pressão para ficar na tela']}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
