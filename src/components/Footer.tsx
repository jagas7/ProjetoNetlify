import Logo from "../assets/logo.svg";
import { footerColumns } from "../data/landing";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <section className="footer-brand">
          <a href="#hero" aria-label="EcoPulse - início">
            <img src={Logo} alt="EcoPulse" width="172" height="44" />
          </a>
          <p>Energia mais clara, economia mais inteligente.</p>
          <div className="social-links" aria-label="Redes sociais">
            <a href="#hero" aria-label="Instagram">◎</a>
            <a href="#hero" aria-label="Facebook">f</a>
            <a href="#hero" aria-label="YouTube">▶</a>
          </div>
        </section>

        {footerColumns.map((column) => (
          <section className="footer-column" key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#hero">{link}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="footer-bottom">
        <p>Feito com energia renovável na aula de Programação Web © {currentYear} EcoPulse - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
