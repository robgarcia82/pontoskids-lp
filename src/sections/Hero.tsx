import Button from '../components/Button';
import { ArrowDownIcon } from '../components/icons';
import './Hero.css';
import { asset } from '../lib/asset';

/** Itens 3D que flutuam ao redor da família (posições em Hero.css). */
const heroDecorations = [
  { name: 'heart', src: asset('assets/hero-heart.png'), size: 242 },
  { name: 'star', src: asset('assets/hero-star.png'), size: 226 },
  { name: 'checklist', src: asset('assets/hero-checklist.png'), size: 314 },
  { name: 'calendar', src: asset('assets/hero-calendar.png'), size: 240 },
];

export default function Hero() {
  return (
    <section className="pk-hero" aria-labelledby="hero-title">
      <div className="pk-hero__background" aria-hidden="true">
        <img className="pk-hero__bg-blob" src={asset('assets/bg-hero.svg')} alt="" />
        <img className="pk-hero__bg-line" src={asset('assets/vector2.svg')} alt="" />
      </div>

      <div className="pk-container">
        <div className="pk-hero__inner">
          <div className="pk-hero__content">
            <h1 id="hero-title" className="pk-hero__title" data-reveal="up" data-reveal-delay="80">
              <span className="pk-hero__title-highlight">Transforme tarefas em missões</span>{' '}
              que as crianças querem cumprir
            </h1>

            <div className="pk-hero__body">
              <p className="pk-hero__lead" data-reveal="up" data-reveal-delay="200">
                Você organiza os combinados uma vez.{' '}
                <br className="pk-hero__lead-break" />
                As crianças cumprem missões, ganham pontos, escolhem recompensas e avançam no
                próprio universo.
              </p>

              <div className="pk-hero__actions" data-reveal="up" data-reveal-delay="320">
                <Button width={246} href="#criar-rotina">
                  Criar minha rotina grátis
                </Button>
                <a className="pk-hero__link" href="#como-funciona">
                  <span>Veja como funciona</span>
                  <ArrowDownIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="pk-hero__figure" data-reveal="scale" data-reveal-delay="240">
            <div className="pk-hero__scene">
              <picture>
                <source srcSet={asset('assets/familia.webp')} type="image/webp" />
                <img
                  className="pk-hero__family"
                  src={asset('assets/familia.png')}
                  width={1178}
                  height={1178}
                  alt="Família reunida olhando um tablet"
                />
              </picture>
              {heroDecorations.map((item) => (
                <img
                  key={item.name}
                  className={`pk-hero__deco pk-hero__deco--${item.name}`}
                  src={item.src}
                  width={item.size}
                  height={item.size}
                  alt=""
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
