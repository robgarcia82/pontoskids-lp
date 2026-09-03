import Header from './sections/Header';
import Hero from './sections/Hero';
import Dores from './sections/Dores';
import ComoFunciona from './sections/ComoFunciona';
import TodaFamilia from './sections/TodaFamilia';
import Depoimentos from './sections/Depoimentos';
import BlocoFinal from './sections/BlocoFinal';
import Precos from './sections/Precos';
import Faq from './sections/Faq';
import Footer from './sections/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <main className="pk-page">
      <Header />
      <Hero />
      <Dores />
      <ComoFunciona />
      <TodaFamilia />
      <Depoimentos />
      <BlocoFinal />
      <Precos />
      <Faq />
      <Footer />
    </main>
  );
}
