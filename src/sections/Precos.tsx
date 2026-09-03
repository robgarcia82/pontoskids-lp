import Tag from '../components/Tag';
import { CheckIcon } from '../components/icons';
import './Precos.css';

type Feature = { label: string; included: boolean };

type Plan = {
  id: string;
  name: string;
  price: { prefix?: string; value: string; suffix?: string };
  description: string;
  features: Feature[];
  cta: string;
  href: string;
  featured?: boolean;
  badge?: string;
};

const baseFeatures = [
  'Rotinas personalizadas',
  'Relatórios de evolução',
  'Perfis para toda a família',
  'Recompensas e limites',
  'Novos jogos e personagens',
];

const withAll = (): Feature[] => baseFeatures.map((label) => ({ label, included: true }));

const plans: Plan[] = [
  {
    id: 'mensal',
    name: 'Mensal',
    price: { prefix: 'R$', value: '39,90', suffix: '/mês' },
    description: 'Cancele quando quiser.',
    features: withAll(),
    cta: 'Assinar o plano mensal',
    href: '#criar-rotina',
  },
  {
    id: 'beta',
    name: 'Beta tester',
    price: { value: 'Grátis' },
    description: '100% grátis para os 30 primeiros pais.',
    features: withAll(),
    cta: 'Começar minha nova rotina',
    href: '#criar-rotina',
    featured: true,
    badge: 'Melhor escolha',
  },
  {
    id: 'vitalicio',
    name: 'Vitalício',
    price: { prefix: 'R$', value: '99,90' },
    description: 'Pagamento único com acesso limitado.',
    features: baseFeatures.map((label) => ({
      label,
      included: label !== 'Novos jogos e personagens',
    })),
    cta: 'Comprar acesso vitalício',
    href: '#criar-rotina',
  },
];

export default function Precos() {
  return (
    <section className="pk-precos" id="precos" aria-labelledby="precos-title">
      <div className="pk-container">
        <div className="pk-precos__heading">
          <div data-reveal="up">
            <Tag>Preços</Tag>
          </div>
          <h2 id="precos-title" className="pk-precos__title pk-section-title" data-reveal="up" data-reveal-delay="100">
            Preço simples.
            <br />
            <span className="pk-precos__title-muted">Sem surpresas.</span>
          </h2>
        </div>

        <div className="pk-precos__grid">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              className={`pk-precos__card${plan.featured ? ' pk-precos__card--featured' : ''}`}
              data-reveal="up"
              data-reveal-delay={150 + index * 120}
            >
              {plan.badge && <span className="pk-precos__badge">{plan.badge}</span>}

              <h3 className="pk-precos__plan">{plan.name}</h3>

              <p className="pk-precos__price">
                {plan.price.prefix && <span className="pk-precos__price-prefix">{plan.price.prefix}</span>}
                <span className="pk-precos__price-value">{plan.price.value}</span>
                {plan.price.suffix && <span className="pk-precos__price-suffix">{plan.price.suffix}</span>}
              </p>

              <p className="pk-precos__description">{plan.description}</p>

              <ul className="pk-precos__features">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className={`pk-precos__feature${feature.included ? '' : ' pk-precos__feature--off'}`}
                  >
                    {feature.included ? (
                      <CheckIcon className="pk-precos__feature-icon" />
                    ) : (
                      <svg className="pk-precos__feature-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6 11h12v2H6z" fill="currentColor" />
                      </svg>
                    )}
                    <span>{feature.label}</span>
                    {!feature.included && <span className="pk-sr-only"> (não incluído)</span>}
                  </li>
                ))}
              </ul>

              <a className="pk-precos__cta" href={plan.href}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
