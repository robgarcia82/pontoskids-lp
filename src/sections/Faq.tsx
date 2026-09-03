import { useState } from 'react';
import Button from '../components/Button';
import Tag from '../components/Tag';
import './Faq.css';

type FaqItem = { question: string; answer: string };

const items: FaqItem[] = [
  {
    question: 'Para qual idade o PontosKids é indicado?',
    answer:
      'O PontosKids é indicado para crianças de 4 a 12 anos. As missões, os pontos e as recompensas podem ser adaptados à idade, à maturidade e à rotina de cada criança.',
  },
  {
    question: 'O que é o PontosKids?',
    answer:
      'O PontosKids é um app que transforma tarefas do dia a dia em missões claras para as crianças. Elas cumprem combinados, ganham pontos e escolhem recompensas definidas pela própria família.',
  },
  {
    question: 'Como funciona na prática?',
    answer:
      'Os pais criam a rotina e definem as tarefas, pontos e recompensas. As crianças acompanham suas missões, cumprem o que foi combinado e veem seu progresso no app.',
  },
  {
    question: 'Quem define as regras e as recompensas?',
    answer:
      'Os pais. Cada família escolhe quais tarefas entram na rotina, quanto vale cada uma e quais recompensas fazem sentido em casa.',
  },
  {
    question: 'O PontosKids é para uma ou mais crianças?',
    answer:
      'Para toda a família. É possível criar perfis e rotinas adequados para cada criança, respeitando diferentes fases, responsabilidades e interesses.',
  },
  {
    question: 'Que tipo de recompensa posso oferecer?',
    answer:
      'A recompensa pode ser o que fizer sentido para vocês: um passeio, escolher o filme da noite, mais tempo em uma atividade favorita ou algo combinado em família. O importante é que seja uma escolha clara e possível.',
  },
  {
    question: 'O app funciona como punição?',
    answer:
      'Não. O PontosKids foi pensado para incentivar participação, clareza e autonomia — não para punir, expor ou envergonhar crianças. O foco está no progresso e nos combinados.',
  },
  {
    question: 'A criança precisa ficar mais tempo na tela?',
    answer:
      'Não. A ideia é usar a tela como apoio para visualizar a rotina e acompanhar o progresso, não como destino. A ação principal acontece fora do app: nas tarefas e na convivência da família.',
  },
  {
    question: 'A criança consegue mudar regras ou recompensas sozinha?',
    answer: 'Não. As configurações importantes ficam sob controle dos pais e podem ser protegidas por PIN.',
  },
  {
    question: 'O PontosKids substitui a conversa em família?',
    answer:
      'Não. Ele organiza e deixa os combinados mais visíveis, mas a conversa continua sendo parte essencial da rotina. O app ajuda a reduzir a repetição e tornar os acordos mais fáceis de acompanhar.',
  },
];

/** Ícone "+" que vira "−" quando o item está aberto. */
function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg className="pk-faq__icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 11h18v2H3z" fill="currentColor" />
      <path
        className="pk-faq__icon-bar"
        d="M11 3h2v18h-2z"
        fill="currentColor"
        style={{ opacity: open ? 0 : 1 }}
      />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pk-faq" id="faq" aria-labelledby="faq-title">
      <div className="pk-container pk-faq__inner">
        <div className="pk-faq__aside">
          <div className="pk-faq__heading">
            <div data-reveal="up">
              <Tag>FAQ</Tag>
            </div>
            <h2 id="faq-title" className="pk-faq__title pk-section-title" data-reveal="up" data-reveal-delay="100">
              Perguntas frequentes
            </h2>
            <div data-reveal="up" data-reveal-delay="200">
              <Button href="#criar-rotina">Criar minha rotina grátis</Button>
            </div>
          </div>
        </div>

        <ul className="pk-faq__list" data-reveal="up" data-reveal-delay="150">
          {items.map((item, index) => {
            const open = openIndex === index;
            const number = String(index + 1).padStart(2, '0');
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-question-${index}`;
            return (
              <li key={item.question} className={`pk-faq__item${open ? ' is-open' : ''}`}>
                <button
                  id={buttonId}
                  type="button"
                  className="pk-faq__question"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="pk-faq__number">{number}.</span>
                  <span className="pk-faq__question-text">{item.question}</span>
                  <ToggleIcon open={open} />
                </button>
                <div
                  id={panelId}
                  className="pk-faq__panel"
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!open}
                  inert={!open}
                >
                  <div className="pk-faq__panel-inner">
                    <p className="pk-faq__answer">{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
