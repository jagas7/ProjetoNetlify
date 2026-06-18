import { plans } from "../data/landing";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section id="pricing" className="container pricing">
      <header className="section-header">
        <p className="desktop-only">Planos e preços</p>
        <h2>Nossos planos</h2>
      </header>

      <section className="even-columns gap-1-5 pricing-grid">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </section>
    </section>
  );
}
