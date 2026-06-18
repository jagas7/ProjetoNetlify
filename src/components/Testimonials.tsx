import { testimonials } from "../data/landing";
import TestimonialCard from "./TestimonialCard";

const carouselItems = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <header className="container section-header">
        <span>
          <p className="desktop-only">Conselho de quem economiza</p>
          <h2>Cada quilowatt importa!</h2>
        </span>
        <p>
          Quem já conhece a EcoPulse sabe que pequenos ajustes diários geram impacto real no fim do mês. Veja alguns depoimentos.
        </p>
      </header>

      <section className="carousel" aria-label="Depoimentos de clientes">
        <div className="carousel-content">
          {carouselItems.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </div>
      </section>
    </section>
  );
}
