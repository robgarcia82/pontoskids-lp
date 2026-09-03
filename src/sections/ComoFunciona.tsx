import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Button from '../components/Button';
import Tag from '../components/Tag';
import './ComoFunciona.css';
import { asset } from '../lib/asset';

type Step = {
  number: string;
  title: string;
  text: string;
  /** Mock do celular exibido quando o passo está selecionado (export do frame "iPhone 14 Pro Max", 2x). */
  image: string;
  imageAlt: string;
};

/**
 * Telas em public/assets/steps/ (step-0N.png + step-0N.webp, export 923×1654 com sombra).
 * placeholder.* é a tela mostrada no desktop antes de qualquer clique.
 */
const toWebp = (pngPath: string) => (pngPath.startsWith('data:') ? pngPath : pngPath.replace(/\.png$/, '.webp'));

/** Tela exibida enquanto nenhum passo está selecionado (desktop; no mobile o passo 01 já vem ativo). */
const defaultScreen = {
  image: asset('assets/steps/placeholder.png'),
  imageAlt: 'Tela inicial do app PontosKids: "Rotina mais leve pra sua família"',
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Você monta a rotina',
    text: 'Escolha o que importa hoje e adapte para cada criança.',
    image: asset('assets/steps/step-01.png'),
    imageAlt: 'Tela do app com as atividades da criança: estudar para a prova e ler um livro',
  },
  {
    number: '02',
    title: 'Seu filho cumpre as missões',
    text: 'As tarefas ficam claras, visuais e fáceis de acompanhar.',
    image: asset('assets/steps/step-02.png'),
    imageAlt: 'Tela do app com o troféu de "Atividade cumprida" e 10 pontos ganhos',
  },
  {
    number: '03',
    title: 'A conquista acontece',
    text: 'Pontos viram escolhas e recompensas combinadas em família.',
    image: asset('assets/steps/step-03.png'),
    imageAlt: 'Tela da lojinha do app, com recompensas para trocar por pontos',
  },
];

export default function ComoFunciona() {
  // Nenhum passo começa selecionado; o celular mostra a tela do passo 01 até o usuário clicar.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // No mobile a lista vira abas, que precisam de um item ativo: o passo 01 começa selecionado.
  const isCompact = useMediaQuery('(max-width: 1023px)');
  const effectiveIndex = activeIndex ?? (isCompact ? 0 : null);
  const screen = effectiveIndex === null ? defaultScreen : steps[effectiveIndex];
  const compactStep = steps[effectiveIndex ?? 0];

  // Pré-carrega as telas só quando a seção se aproxima da viewport (não compete com o hero).
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const preload = () => {
      steps.forEach((step) => {
        const img = new Image();
        img.src = toWebp(step.image);
      });
    };
    if (!('IntersectionObserver' in window)) {
      preload();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          preload();
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pk-como" id="como-funciona" aria-labelledby="como-title">
      <div className="pk-container pk-como__inner">
        <div className="pk-como__phone" aria-live="polite" data-reveal="scale">
          <picture key={screen.image}>
            {!screen.image.startsWith('data:') && (
              <source srcSet={toWebp(screen.image)} type="image/webp" />
            )}
            <img className="pk-como__phone-img" src={screen.image} alt={screen.imageAlt} />
          </picture>
        </div>

        <div className="pk-como__content">
          <div className="pk-como__heading">
            <div data-reveal="up" data-reveal-delay="100">
              <Tag>Como funciona</Tag>
            </div>
            <h2 id="como-title" className="pk-como__title pk-section-title" data-reveal="up" data-reveal-delay="180">
              Simples para os pais. Motivador para as crianças
            </h2>
          </div>

          {/* Mobile/tablet: abas compactas + texto do passo selecionado (ocultas no desktop) */}
          <div className="pk-como__tabs" role="tablist" aria-label="Passos" data-reveal="up" data-reveal-delay="200">
            {steps.map((step, index) => {
              const isActive = index === effectiveIndex;
              return (
                <button
                  key={step.number}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`pk-como__tab${isActive ? ' pk-como__tab--active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {step.number}
                </button>
              );
            })}
          </div>
          <div className="pk-como__tab-copy" key={compactStep.number}>
            <p className="pk-como__step-title">{compactStep.title}</p>
            <p className="pk-como__step-text">{compactStep.text}</p>
          </div>

          <ol className="pk-como__steps">
            {steps.map((step, index) => {
              const isActive = index === effectiveIndex;
              return (
                <li
                  key={step.number}
                  className="pk-como__step-wrapper"
                  data-reveal="up"
                  data-reveal-delay={300 + index * 120}
                >
                  <button
                    type="button"
                    className={`pk-como__step${isActive ? ' pk-como__step--active' : ''}`}
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="pk-como__step-number">{step.number}</span>
                    <span className="pk-como__step-copy">
                      <span className="pk-como__step-title">{step.title}</span>
                      <span className="pk-como__step-text">{step.text}</span>
                    </span>
                  </button>
                  <hr className="pk-como__divider" />
                </li>
              );
            })}
          </ol>

          <div className="pk-como__cta" data-reveal="up" data-reveal-delay="700">
            <Button width={214} tracking={-0.01} href="#criar-rotina">
              Criar minha rotina
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
