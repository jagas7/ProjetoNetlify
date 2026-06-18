import { solutionCards } from "../data/landing";
import Card from "./Card";

export default function Solutions() {
  return (
    <section className="container" id="solution">
      <header className="section-header solution-header">
        <span>
          <h2>Soluções</h2>
          <span className="desktop-only">
            <h2>Sob medida para você</h2>
          </span>
        </span>
        <p>
          Inovação é com a gente! A <strong>EcoPulse</strong> já ajuda negócios a enxergarem desperdícios e transformarem dados em economia real.
        </p>
      </header>

      <section className="even-columns solution-cards">
        {solutionCards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </section>
    </section>
  );
}
