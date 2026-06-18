import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import MenuIcon from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";
import { navLinks } from "../data/landing";
import Button from "./Button";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function closeMenu() {
    setShowMobileMenu(false);
  }

  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;

    html.style.overflow = showMobileMenu ? "hidden" : "auto";

    return () => {
      html.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <header className="site-header">
      <nav className="container header-nav py-sm" aria-label="Menu principal">
        <a href="#hero" onClick={closeMenu} aria-label="EcoPulse - inicio">
          <img src={Logo} alt="EcoPulse" width="172" height="44" />
        </a>

        <div className="desktop-only">
          <ul className="flex items-center gap-1 nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="desktop-only">
          <div className="flex items-center gap-1 nav-actions">
            <a className="reverse-color" href="#contact">
              Login
            </a>
            <Button href="#contact" className="btn-small">
              Cadastre-se <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>

        <div className="mobile-menu">
          {showMobileMenu ? (
            <div className="mobile-menu-content" role="dialog" aria-modal="true" aria-label="Menu mobile">
              <div className="container">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} onClick={closeMenu}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a className="reverse-color" href="#contact" onClick={closeMenu}>
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}

          <button
            className="btn-wrapper"
            type="button"
            onClick={() => setShowMobileMenu((current) => !current)}
            aria-label={showMobileMenu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={showMobileMenu}
          >
            <img src={showMobileMenu ? CloseIcon : MenuIcon} alt="" width="28" height="28" />
          </button>
        </div>
      </nav>
    </header>
  );
}
