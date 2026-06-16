import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home",         to: "/"             },
  { label: "About",        to: "/#about"       },
  { label: "Eligibility",  to: "/#eligibility" },
  { label: "How to Apply", to: "/how-to-apply" },
  { label: "Results",      to: "/#results"     },
  { label: "FAQ",          to: "/#faq"         },
  { label: "Contact",      to: "/#contact"     },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to.split("#")[0]) && to.split("#")[0] !== "/";
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="nav-topbar">
        ADERF Annual Scholarship 2026 — Applications Now Open · 15 June Deadline
      </div>

      <nav className="nav-root">
        <div className="nav-inner">

          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="nav-logo-icon">उ</div>
            <div>
              <span className="nav-logo-hi">उत्कर्ष</span>
              <span className="nav-logo-en">ADERF SCHOLARSHIP</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={isActive(link.to) ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/how-to-apply" className="nav-cta">
                Apply Now ↗
              </Link>
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
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/how-to-apply"
            className="nav-mob-cta"
            onClick={() => setMenuOpen(false)}
          >
            Apply Now ↗
          </Link>
        </div>
      </nav>
    </>
  );
}