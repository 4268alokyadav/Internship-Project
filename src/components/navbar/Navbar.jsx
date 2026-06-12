import { useState } from "react";

const NAV_LINKS = ["Home", "About", "Eligibility", "How to Apply", "Results", "FAQ", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .nav-root {
          font-family: 'Inter', sans-serif;
          background: #1a1a2e;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }

        .nav-topbar {
          background: #f5a623;
          text-align: center;
          padding: 5px 16px;
          font-size: 11px;
          font-weight: 600;
          color: #1a1a2e;
          letter-spacing: 0.5px;
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .nav-logo-icon {
          width: 38px;
          height: 38px;
          background: #f5a623;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 900;
          color: #1a1a2e;
        }

        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .nav-logo-hi {
          font-size: 18px;
          font-weight: 900;
          color: #f5a623;
          letter-spacing: 1px;
        }

        .nav-logo-en {
          font-size: 10px;
          font-weight: 500;
          color: #aab0c0;
          letter-spacing: 0.5px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          text-decoration: none;
          color: #c8cdd8;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 4px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #f5a623;
          background: rgba(245, 166, 35, 0.08);
        }

        .nav-cta {
          background: #f5a623;
          color: #1a1a2e !important;
          font-weight: 700 !important;
          padding: 9px 18px !important;
          border-radius: 6px !important;
          transition: background 0.2s, transform 0.15s !important;
        }

        .nav-cta:hover {
          background: #e09510 !important;
          transform: translateY(-1px);
        }

        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 6px;
        }

        .nav-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #f5a623;
          border-radius: 2px;
          transition: all 0.3s;
        }

        .nav-mobile {
          display: none;
          background: #12122a;
          border-top: 1px solid #2a2a4a;
          padding: 12px 24px 16px;
        }

        .nav-mobile.open {
          display: block;
        }

        .nav-mobile a {
          display: block;
          color: #c8cdd8;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          padding: 10px 0;
          border-bottom: 1px solid #1e1e3a;
          transition: color 0.2s;
        }

        .nav-mobile a:hover {
          color: #f5a623;
        }

        .nav-mobile .nav-cta-mobile {
          display: block;
          margin-top: 14px;
          background: #f5a623;
          color: #1a1a2e;
          text-align: center;
          padding: 12px;
          border-radius: 6px;
          font-weight: 700;
          border: none;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <nav className="nav-root">
        <div className="nav-topbar">
          ADERF Annual Scholarship 2026 — Applications Now Open · 15 June Deadline
        </div>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">उ</div>
            <div className="nav-logo-text">
              <span className="nav-logo-hi">उत्कर्ष</span>
              <span className="nav-logo-en">ADERF SCHOLARSHIP</span>
            </div>
          </a>

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
              <a href="#apply" className="nav-cta">Apply Now ↗</a>
            </li>
          </ul>

          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>

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
          <a href="#apply" className="nav-cta-mobile" onClick={() => setMenuOpen(false)}>
            Apply Now ↗
          </a>
        </div>
      </nav>
    </>
  );
}
