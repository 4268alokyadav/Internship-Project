import { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  "Home",
  "About",
  "Eligibility",
  "How to Apply",
  "Results",
  "FAQ",
  "Contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="nav-topbar">
        ADERF Annual Scholarship 2026 — Applications Now Open · 15 June Deadline
      </div>

      <nav className="nav-root">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">उ</div>
            <div>
              <span className="nav-logo-hi">उत्कर्ष</span>
              <span className="nav-logo-en">ADERF SCHOLARSHIP</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className={link === "Home" ? "active" : ""}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a href="#apply" className="nav-cta">
                Apply Now ↗
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={menuOpen ? "open-top" : ""} />
            <span className={menuOpen ? "open-mid" : ""} />
            <span className={menuOpen ? "open-bot" : ""} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#apply"
            className="nav-mob-cta"
            onClick={() => setMenuOpen(false)}
          >
            Apply Now ↗
          </a>
        </div>
      </nav>
    </>
  );
}
