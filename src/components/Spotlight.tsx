import { quickFeatures } from "../data/landing";
import Icon from "./Icon";

export default function Spotlight() {
  return (
    <section className="spotlight" id="impact">
      <div className="container">
        <div className="spotlight-row spotlight-row-cards">
          <div className="spotlight-copy">
            <span className="red-line" aria-hidden="true" />
            <h2>O valor que você busca em um único painel</h2>
            <p>
              Reúna dados, metas e alertas em uma experiência simples. Assim sua equipe deixa de procurar informações em lugares diferentes.
            </p>
            <a href="#contact" className="text-link">
              Saiba mais <span aria-hidden="true">›</span>
            </a>
          </div>

          <div className="spotlight-mini-cards" aria-label="Funcionalidades da plataforma">
            {quickFeatures.map((feature) => (
              <article className="mini-card" key={feature.title}>
                <span className="mini-card-icon" aria-hidden="true">
                  <Icon name={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <span className="mini-card-line" aria-hidden="true" />
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="spotlight-row spotlight-row-dashboard">
          <div className="dashboard-art" aria-label="Prévia visual do dashboard EcoPulse">
            <span className="dash-bg dash-bg-one" aria-hidden="true" />
            <span className="dash-bg dash-bg-two" aria-hidden="true" />

            <article className="energy-panel">
              <div className="panel-top">
                <span />
                <span />
                <span />
              </div>
              <div className="bar-chart" aria-hidden="true">
                {Array.from({ length: 14 }).map((_, index) => (
                  <i key={index} style={{ height: `${32 + ((index * 17) % 62)}%` }} />
                ))}
              </div>
              <div className="panel-row">
                <strong>Economia prevista</strong>
                <span>R$ 4.820</span>
              </div>
            </article>

            <article className="floating-panel">
              <span>Meta do mês</span>
              <strong>82%</strong>
              <small>em andamento</small>
            </article>
          </div>

          <div className="spotlight-copy">
            <span className="red-line" aria-hidden="true" />
            <h2>Gerenciamento dos indicadores</h2>
            <p>
              Compare períodos, encontre picos de consumo e acompanhe cada meta com gráficos pensados para decisões rápidas.
            </p>
            <a href="#pricing" className="text-link">
              Saiba mais <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
