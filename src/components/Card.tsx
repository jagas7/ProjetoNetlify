import type { SolutionCard } from "../data/landing";
import Icon from "./Icon";

type CardProps = SolutionCard;

export default function Card({ icon, title, text }: CardProps) {
  return (
    <article className="card">
      <span className="card-icon" aria-hidden="true">
        <Icon name={icon} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <hr />
    </article>
  );
}
