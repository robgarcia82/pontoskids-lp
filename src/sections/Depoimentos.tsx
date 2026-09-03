import Tag from '../components/Tag';
import './Depoimentos.css';

type Testimonial = { quote: string; name: string; relation: string };

const testimonials: Testimonial[] = [
  { quote: 'Parei de repetir "escova os dentes" cinco vezes por noite. Agora o Theo olha a missão no app e vai sozinho.', name: 'Fernanda', relation: 'mãe do Theo' },
  { quote: 'A manhã aqui era um caos. Com a rotina montada, a Helena sabe a ordem das coisas e a gente sai de casa sem briga.', name: 'Rodrigo', relation: 'pai da Helena' },
  { quote: 'Ela adorou escolher a recompensa. Trocou os pontos por um passeio de bike e falou disso a semana inteira.', name: 'Juliana', relation: 'mãe da Alice' },
  { quote: 'O que mais gostei: quem define as regras somos nós. Nada de recompensa que não faz sentido pra nossa casa.', name: 'Marcelo e Paula', relation: 'pais do Miguel' },
  { quote: 'Arrumar o quarto virou missão. Não sei explicar, mas funcionou melhor que qualquer conversa que eu tentei.', name: 'Camila', relation: 'mãe do Bernardo' },
  { quote: 'Tenho dois filhos com idades diferentes e cada um tem a própria rotina. Isso resolveu a comparação entre eles.', name: 'André', relation: 'pai da Laura e do Davi' },
  { quote: 'Achei que ia ser mais tela. Foi o contrário: ela abre, marca a tarefa feita e volta pra vida real.', name: 'Patrícia', relation: 'mãe da Manuela' },
  { quote: 'O resumo semanal me mostrou que sábado era o dia mais difícil. Ajustei a carga e a semana ficou mais leve.', name: 'Ricardo', relation: 'pai do Lucas' },
  { quote: 'A Sofia começou a fazer a lição sem eu pedir. Ganhar os pontos virou motivo de orgulho pra ela.', name: 'Aline', relation: 'mãe da Sofia' },
  { quote: 'Meu marido finalmente sabe o que foi combinado. Antes só eu carregava essa lista na cabeça.', name: 'Renata', relation: 'mãe do Gabriel' },
  { quote: 'O Pedro tem 5 anos e entende tudo pelos ícones. Ele mesmo mostra pra avó as missões que cumpriu.', name: 'Thiago', relation: 'pai do Pedro' },
  { quote: 'Sem punição, sem chantagem. Só combinado claro e a criança vendo o próprio progresso. Era o que eu procurava.', name: 'Luciana', relation: 'mãe da Valentina' },
  { quote: 'Montei a rotina em dez minutos num domingo à noite. Segunda-feira já estava rodando em casa.', name: 'Felipe', relation: 'pai do Arthur' },
  { quote: 'A Isabela quer guardar pontos pra festa do pijama. Aprendeu a esperar por algo, e isso não tem preço.', name: 'Vanessa', relation: 'mãe da Isabela' },
  { quote: 'Aprovar as tarefas pelo celular leva segundos. E a Maria Clara fica esperando a aprovação toda animada.', name: 'Gustavo', relation: 'pai da Maria Clara' },
  { quote: 'Guardar o material escolar deixou de ser motivo de briga. Virou uma missão de 10 pontos e pronto.', name: 'Daniela', relation: 'mãe do Enzo' },
  { quote: 'A gente combinou que tempo de videogame é recompensa, não direito. Ele aceitou porque a regra é clara.', name: 'Leandro', relation: 'pai do Rafael' },
  { quote: 'Meus gêmeos competem pra ver quem termina primeiro. Nunca vi os dois tão empolgados com a rotina.', name: 'Carolina', relation: 'mãe do Caio e da Lívia' },
  { quote: 'Uso com a minha filha de 11 anos e funciona. Ela gosta de controlar os próprios pontos e planejar.', name: 'Bruno', relation: 'pai da Beatriz' },
  { quote: 'O PIN nos ajustes foi um alívio. Meu filho é esperto, mas as regras continuam com a gente.', name: 'Simone', relation: 'mãe do Henrique' },
  { quote: 'Escolher o filme da sexta virou a recompensa favorita da Cecília. Custou zero reais e vale ouro.', name: 'Eduardo e Marina', relation: 'pais da Cecília' },
  { quote: 'Meu filho tem TDAH e a rotina visual mudou tudo. Ele sabe o próximo passo sem eu ficar em cima.', name: 'Adriana', relation: 'mãe do Nicolas' },
  { quote: 'Sou pai separado e uso nos dias que o Vitor fica comigo. A rotina dele continua a mesma nas duas casas.', name: 'Fábio', relation: 'pai do Vitor' },
  { quote: 'Achei que era só mais um app. Três semanas depois, a Lara está mais autônoma e eu grito bem menos.', name: 'Tatiana', relation: 'mãe da Lara' },
];

function Stars() {
  return (
    <span className="pk-depo__stars" aria-label="5 de 5 estrelas" role="img">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2.5l2.94 6.3 6.9.8-5.1 4.72 1.36 6.83L12 17.77l-6.1 3.38 1.36-6.83-5.1-4.72 6.9-.8L12 2.5Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </span>
  );
}

function Card({ item }: { item: Testimonial }) {
  return (
    <figure className="pk-depo__card">
      <Stars />
      <blockquote className="pk-depo__quote">“{item.quote}”</blockquote>
      <figcaption className="pk-depo__author">
        <span className="pk-depo__name">{item.name}</span>
        <span className="pk-depo__dot" aria-hidden="true">
          •
        </span>
        <span className="pk-depo__relation">{item.relation}</span>
      </figcaption>
    </figure>
  );
}

/** Uma fileira do marquee: o conteúdo é duplicado para o loop ficar contínuo. */
function Row({ items }: { items: Testimonial[] }) {
  return (
    <div className="pk-depo__row">
      <div className="pk-depo__track">
        {items.map((item) => (
          <Card key={item.name + item.relation} item={item} />
        ))}
        {items.map((item) => (
          <Card key={`dup-${item.name}-${item.relation}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="pk-depo" aria-labelledby="depo-title">
      <div className="pk-container pk-depo__heading">
        <div data-reveal="up">
          <Tag>Depoimentos</Tag>
        </div>
        <h2 id="depo-title" className="pk-depo__title pk-section-title" data-reveal="up" data-reveal-delay="100">
          Ideal para famílias que querem criar melhores hábitos.
        </h2>
      </div>

      <div className="pk-depo__marquee" data-reveal="up" data-reveal-delay="200">
        <Row items={testimonials} />
      </div>
    </section>
  );
}
