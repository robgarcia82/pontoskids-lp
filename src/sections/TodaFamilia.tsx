import CheckList from '../components/CheckList';
import Tag from '../components/Tag';
import './TodaFamilia.css';
import { asset } from '../lib/asset';

export default function TodaFamilia() {
  return (
    <section className="pk-familia" aria-labelledby="familia-title">
      <div className="pk-container">
        <div className="pk-familia__heading">
          <div data-reveal="up">
            <Tag>Como funciona</Tag>
          </div>
          <h2 id="familia-title" className="pk-familia__title pk-section-title" data-reveal="up" data-reveal-delay="100">
            Você organiza uma vez.{' '}
            <br className="pk-familia__title-break" />
            Ela aprende a fazer mais sozinha
          </h2>
        </div>

        <div className="pk-familia__cards">
          <article
            className="pk-familia__card pk-familia__card--pais"
            data-reveal="up"
            data-reveal-delay="150"
          >
            <div className="pk-familia__card-content">
              <Tag surface="white">Para os pais</Tag>
              <div className="pk-familia__card-body">
                <h3 className="pk-familia__card-title">
                  Menos lembretes.{' '}
                  <br />
                  Mais previsibilidade
                </h3>
                <p className="pk-familia__card-text">
                  Organize os combinados, acompanhe o progresso e ajuste a rotina sem
                  transformar isso em mais uma tarefa.
                </p>
                <CheckList
                  color="var(--pk-color-primary)"
                  items={[
                    'Visão rápida da rotina',
                    'Perfis para cada criança',
                    'Regras que você controla',
                  ]}
                />
              </div>
            </div>
            <div className="pk-familia__mock-wrapper">
              <picture>
                <source srcSet={asset('assets/home-pais.webp')} type="image/webp" />
                <img
                  data-reveal="up"
                  data-reveal-delay="450"
                  className="pk-familia__mock pk-familia__mock--pais"
                  src={asset('assets/home-pais.png')}
                  width={610}
                  height={1366}
                  loading="lazy"
                  decoding="async"
                  alt="Tela de resumo dos pais no app, com o progresso semanal de cada criança"
                />
              </picture>
            </div>
          </article>

          <article
            className="pk-familia__card pk-familia__card--filhos"
            data-reveal="up"
            data-reveal-delay="300"
          >
            <div className="pk-familia__card-content">
              <Tag surface="white" tone="teal">
                para as crianças
              </Tag>
              <div className="pk-familia__card-body">
                <h3 className="pk-familia__card-title">Missão feita, conquista visível</h3>
                <p className="pk-familia__card-text">
                  Ela vê o que precisa fazer, acumula pontos{' '}
                  <br className="pk-familia__text-break" />e escolhe recompensas que fazem
                  sentido para a família.
                </p>
                <CheckList
                  color="var(--pk-color-teal)"
                  items={['Missões claras', 'Feedback positivo', 'Escolha suas recompensas']}
                />
              </div>
            </div>
            <div className="pk-familia__mock-wrapper">
              <picture>
                <source srcSet={asset('assets/home-criancas.webp')} type="image/webp" />
                <img
                  data-reveal="up"
                  data-reveal-delay="600"
                  className="pk-familia__mock pk-familia__mock--filhos"
                  src={asset('assets/home-criancas.png')}
                  width={608}
                  height={1362}
                  loading="lazy"
                  decoding="async"
                  alt="Tela da lojinha de recompensas da criança no app"
                />
              </picture>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
