import type { Testimonial } from "../data/landing";

type TestimonialCardProps = Testimonial;

function getStars(rating: number) {
  const total = 5;
  return Array.from({ length: total }, (_, index) => index < rating);
}

export default function TestimonialCard({ image, initials, text, rating, name, role }: TestimonialCardProps) {
  return (
    <article className="carousel-card">
      {image ? (
        <img src={image} alt={`Foto de ${name}`} />
      ) : (
        <span className="avatar" aria-hidden="true">
          {initials}
        </span>
      )}

      <span className="testimony">
        <p>{text}</p>
      </span>

      <span className="rating" aria-label={`${rating} de 5 estrelas`}>
        {getStars(rating).map((filled, index) => (
          <span key={`${name}-${index}`} aria-hidden="true">
            {filled ? "★" : "☆"}
          </span>
        ))}
      </span>

      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </article>
  );
}
