import Button from "./Button";

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <span className="hero-ornament hero-ornament-left" aria-hidden="true" />
      <span className="hero-ornament hero-ornament-right desktop-only" aria-hidden="true" />

      <div className="container hero-content">
        <p className="eyebrow desktop-only">Olá</p>
        <h1>Energia inteligente para reduzir custos e desperdícios</h1>
        <p>
          A EcoPulse centraliza dados de consumo, identifica oportunidades de economia e ajuda sua equipe a tomar decisões mais sustentáveis.
        </p>

        <div className="flex gap-1 hero-buttons">
          <Button href="#pricing">Ver planos</Button>
          <Button href="#solution" secondary>
            Veja mais
          </Button>
        </div>

        <div className="hero-metrics" aria-label="Resultados da EcoPulse">
          <article>
            <strong>18%</strong>
            <span>média de economia</span>
          </article>
          <article>
            <strong>24h</strong>
            <span>alertas de consumo</span>
          </article>
          <article>
            <strong>3x</strong>
            <span>decisões mais rápidas</span>
          </article>
        </div>
      </div>
    </section>
  );
}
