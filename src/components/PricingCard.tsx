import type { Plan } from "../data/landing";
import Button from "./Button";

type PricingCardProps = Plan;

export default function PricingCard({ name, description, price, period, cta, featured, bonus, benefits }: PricingCardProps) {
  return (
    <article className={`pricing-card ${featured ? "premium" : ""}`}>
      {bonus ? (
        <span className="bonus">
          <p>{bonus}</p>
        </span>
      ) : null}

      <span className="plan">
        <h3>{name}</h3>
        <p>{description}</p>
      </span>

      <span className="price">
        <h2>{price}</h2>
        {period ? <p>{period}</p> : null}
      </span>

      <Button href="#contact" secondary={!featured}>
        {cta}
      </Button>

      <hr />

      <ul>
        {benefits.map((benefit) => (
          <li className="features" key={benefit}>
            <span aria-hidden="true">✓</span>
            <p>{benefit}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
