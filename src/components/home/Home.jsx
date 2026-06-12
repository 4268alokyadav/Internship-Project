export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hp {
          font-family: 'Inter', sans-serif;
          color: #1a1a2e;
          background: #ffffff;
        }

        /* ── HERO ─────────────────────────────────────── */
        .hero {
          background: #ffffff;
          padding: 72px 24px 64px;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .hero-eyebrow {
          display: inline-block;
          background: #fff8e7;
          color: #b07d10;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 4px;
          border-left: 3px solid #f5a623;
          margin-bottom: 20px;
        }

        .hero-heading {
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 900;
          line-height: 1.05;
          color: #1a1a2e;
          margin-bottom: 20px;
        }

        .hero-heading .gold {
          color: #f5a623;
          position: relative;
        }

        .hero-heading .gold::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 100%;
          height: 4px;
          background: #f5a623;
          opacity: 0.3;
          border-radius: 2px;
        }

        .hero-body {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 32px;
        }

        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #f5a623;
          color: #1a1a2e;
          border: none;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .btn-primary:hover {
          background: #e09510;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: #1a1a2e;
          border: 2px solid #1a1a2e;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .btn-outline:hover {
          background: #1a1a2e;
          color: #fff;
        }

        /* Hero card */
        .hero-card {
          background: #1a1a2e;
          border-radius: 16px;
          padding: 36px 32px;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .hero-card::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 160px; height: 160px;
          background: rgba(245,166,35,0.08);
          border-radius: 50%;
        }

        .hero-card-icon {
          width: 48px; height: 48px;
          background: rgba(245,166,35,0.15);
          border: 2px solid rgba(245,166,35,0.4);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
        }

        .hero-card-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #f5a623;
          margin-bottom: 6px;
        }

        .hero-card-amount {
          font-size: 48px;
          font-weight: 900;
          color: #f5a623;
          line-height: 1;
          margin-bottom: 4px;
        }

        .hero-card-sublabel {
          font-size: 12px;
          color: #aab0c0;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .hero-card-rows {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
        }

        .hero-card-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
        }

        .hero-card-row span:first-child { color: #8890a0; }
        .hero-card-row span:last-child { color: #fff; font-weight: 600; }

        .badge-free {
          background: #f5a623;
          color: #1a1a2e;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 20px;
        }

        /* ── STATS BAR ────────────────────────────────── */
        .stats-bar {
          background: #f5a623;
          padding: 20px 24px;
        }

        .stats-bar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          text-align: center;
        }

        .stat-item {
          padding: 8px 16px;
          border-right: 1px solid rgba(26,26,46,0.2);
        }

        .stat-item:last-child { border-right: none; }

        .stat-num {
          font-size: 26px;
          font-weight: 900;
          color: #1a1a2e;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 10px;
          font-weight: 600;
          color: rgba(26,26,46,0.65);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* ── ABOUT ────────────────────────────────────── */
        .about-section {
          padding: 80px 24px;
          background: #f8f9fc;
        }

        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-eyebrow {
          font-size: 11px;
          font-weight: 700;
          color: #f5a623;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .section-heading {
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .section-heading .underline-gold {
          text-decoration: underline;
          text-decoration-color: #f5a623;
          text-underline-offset: 4px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
          margin-top: 40px;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .feature-icon {
          width: 36px; height: 36px;
          background: #fff8e7;
          border: 1px solid #f5c25c;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-title {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 5px;
        }

        .feature-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.6;
        }

        /* Dark info card */
        .info-card {
          background: #1a1a2e;
          border-radius: 16px;
          padding: 36px;
          color: #fff;
          text-align: center;
        }

        .info-card-brand {
          font-size: 22px;
          font-weight: 900;
          color: #f5a623;
          margin-bottom: 4px;
        }

        .info-card-sub {
          font-size: 10px;
          color: #8890a0;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }

        .info-cell {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          padding: 16px;
        }

        .info-cell-label {
          font-size: 10px;
          color: #8890a0;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .info-cell-value {
          font-size: 20px;
          font-weight: 800;
          color: #f5a623;
        }

        .info-cell-value.white { color: #fff; }

        /* ── HOW IT WORKS ─────────────────────────────── */
        .steps-section {
          padding: 80px 24px;
          background: #fff;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .step-card {
          text-align: center;
          position: relative;
        }

        .step-card::after {
          content: '→';
          position: absolute;
          top: 30px; right: -14px;
          color: #f5a623;
          font-size: 20px;
          font-weight: 700;
        }

        .step-card:last-child::after { display: none; }

        .step-num {
          width: 56px; height: 56px;
          background: #1a1a2e;
          color: #f5a623;
          font-size: 22px;
          font-weight: 900;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          border: 3px solid #f5a623;
        }

        .step-title {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .step-desc {
          font-size: 12px;
          color: #777;
          line-height: 1.6;
        }

        /* ── ELIGIBILITY + CRITERIA ───────────────────── */
        .elig-section {
          padding: 80px 24px;
          background: #f8f9fc;
        }

        .elig-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-top: 8px;
        }

        .elig-col-head {
          font-size: 11px;
          font-weight: 700;
          color: #f5a623;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 6px;
        }

        .elig-col-title {
          font-size: 26px;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 28px;
        }

        .elig-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .elig-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: #fff;
          border-radius: 10px;
          border: 1px solid #eee;
        }

        .elig-dot {
          width: 10px; height: 10px;
          background: #f5a623;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .elig-item-title {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 3px;
        }

        .elig-item-desc {
          font-size: 12px;
          color: #777;
          line-height: 1.5;
        }

        /* Criteria bars */
        .criteria-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 12px;
        }

        .criteria-row {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .criteria-top {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 600;
          color: #333;
        }

        .criteria-pct { color: #f5a623; font-weight: 700; }

        .criteria-bar-bg {
          height: 8px;
          background: #e8eaf0;
          border-radius: 4px;
          overflow: hidden;
        }

        .criteria-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #f5a623, #e8b820);
          border-radius: 4px;
          transition: width 0.6s ease;
        }

        .criteria-note {
          margin-top: 20px;
          padding: 14px 16px;
          background: #fff;
          border-radius: 8px;
          border-left: 3px solid #f5a623;
          font-size: 12px;
          color: #666;
          line-height: 1.6;
        }

        /* ── CTA BANNER ───────────────────────────────── */
        .cta-section {
          background: #1a1a2e;
          padding: 72px 24px;
        }

        .cta-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
        }

        .cta-tag {
          display: inline-block;
          background: rgba(245,166,35,0.15);
          color: #f5a623;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 4px;
          margin-bottom: 16px;
        }

        .cta-heading {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 900;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .cta-heading span { color: #f5a623; }

        .cta-body {
          font-size: 15px;
          color: #8890a0;
          line-height: 1.6;
          max-width: 520px;
        }

        .cta-date-box {
          background: rgba(245,166,35,0.1);
          border: 2px solid rgba(245,166,35,0.3);
          border-radius: 12px;
          padding: 28px 36px;
          text-align: center;
          min-width: 180px;
        }

        .cta-date-label {
          font-size: 10px;
          color: #f5a623;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .cta-date-num {
          font-size: 56px;
          font-weight: 900;
          color: #f5a623;
          line-height: 1;
          margin-bottom: 2px;
        }

        .cta-date-month {
          font-size: 14px;
          color: #aab0c0;
          font-weight: 500;
        }

        .cta-btns {
          display: flex;
          gap: 14px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .btn-white {
          background: #fff;
          color: #1a1a2e;
          border: none;
          padding: 13px 26px;
          font-size: 14px;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .btn-white:hover { background: #f5a623; }

        .btn-ghost {
          background: transparent;
          color: #aab0c0;
          border: 2px solid rgba(255,255,255,0.15);
          padding: 11px 26px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .btn-ghost:hover {
          border-color: #f5a623;
          color: #f5a623;
        }

        /* ── RESPONSIVE ───────────────────────────────── */
        @media (max-width: 900px) {
          .hero-inner, .about-grid, .elig-grid { grid-template-columns: 1fr; gap: 32px; }
          .steps-grid { grid-template-columns: repeat(2, 1fr); }
          .step-card::after { display: none; }
          .stats-bar-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(2) { border-right: none; }
          .cta-inner { grid-template-columns: 1fr; }
          .cta-date-box { width: 100%; }
          .info-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 580px) {
          .steps-grid { grid-template-columns: 1fr; }
          .stats-bar-inner { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="hp">

        {/* ── HERO ── */}
        <section className="hero" id="home">
          <div className="hero-inner">
            <div>
              <span className="hero-eyebrow">ADERF Annual Scholarship Program</span>
              <h1 className="hero-heading">
                Empowering<br />
                <span className="gold">Future</span><br />
                Achievers
              </h1>
              <p className="hero-body">
                A merit-based scholarship for Class X students — recognizing academic excellence
                and supporting deserving young minds with ₹5,000 financial assistance.
              </p>
              <div className="hero-btns">
                <a href="#apply" className="btn-primary">Apply Now ↗</a>
                <a href="#about" className="btn-outline">Learn More</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon">🏅</div>
              <div className="hero-card-label">Merit Scholarship</div>
              <div className="hero-card-amount">₹5,000</div>
              <div className="hero-card-sublabel">One-Time Award</div>
              <div className="hero-card-rows">
                <div className="hero-card-row">
                  <span>Program opens</span>
                  <span>15 June 2026</span>
                </div>
                <div className="hero-card-row">
                  <span>Class eligible</span>
                  <span>Class X only</span>
                </div>
                <div className="hero-card-row">
                  <span>Seats available</span>
                  <span>11</span>
                </div>
                <div className="hero-card-row">
                  <span>Application fee</span>
                  <span><span className="badge-free">FREE</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="stats-bar">
          <div className="stats-bar-inner">
            {[
              { num: "11", label: "Scholars Selected Yearly" },
              { num: "₹5K", label: "Scholarship Amount" },
              { num: "100%", label: "Free to Apply" },
              { num: "15 Jun", label: "Annual Launch Date" },
            ].map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <section className="about-section" id="about">
          <div className="section-inner">
            <div className="section-eyebrow">About the Program</div>
            <h2 className="section-heading">
              A Flagship Initiative by<br />
              <span className="underline-gold">ADERF</span>
            </h2>

            <div className="about-grid">
              <div className="feature-list">
                {[
                  {
                    icon: "✅",
                    title: "Merit-Based & Transparent",
                    desc: "Every selection is conducted through a professionally managed, fair evaluation process with academic scoring, document verification, and committee review."
                  },
                  {
                    icon: "🏫",
                    title: "Open to All Recognized Boards",
                    desc: "CBSE, ICSE, State Board, and equivalent recognized schools are all eligible. Talent across every region and background is welcome."
                  },
                  {
                    icon: "💻",
                    title: "Fully Digital Process",
                    desc: "From application to scholarship disbursement — the entire process is online. Register, upload documents, and track your status from anywhere."
                  },
                ].map((f) => (
                  <div className="feature-item" key={f.title}>
                    <div className="feature-icon">{f.icon}</div>
                    <div>
                      <div className="feature-title">{f.title}</div>
                      <div className="feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-card">
                <div className="info-card-brand">उत्कर्ष 2026</div>
                <div className="info-card-sub">Asian Dev. Educational & Research Foundation</div>
                <div className="info-grid">
                  {[
                    { label: "Eligible Class", value: "Class X" },
                    { label: "Program Cycle", value: "Annual", white: true },
                    { label: "Award Per Scholar", value: "₹5,000" },
                    { label: "Application Fee", value: "Zero", white: true },
                  ].map((c) => (
                    <div className="info-cell" key={c.label}>
                      <div className="info-cell-label">{c.label}</div>
                      <div className={`info-cell-value ${c.white ? "white" : ""}`}>{c.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="steps-section" id="how-to-apply">
          <div className="section-inner">
            <div className="section-eyebrow">How It Works</div>
            <h2 className="section-heading">Your Journey to Becoming an Utkarsh Scholar</h2>
            <div className="steps-grid">
              {[
                {
                  n: "1", title: "Register Online",
                  desc: "Sign up with mobile OTP verification on the official portal"
                },
                {
                  n: "2", title: "Submit Application",
                  desc: "Fill the form and upload your documents securely"
                },
                {
                  n: "3", title: "Verification",
                  desc: "School and ADERF verify your documents and enrollment"
                },
                {
                  n: "4", title: "Get Selected",
                  desc: "11 scholars selected and awarded ₹5,000 each"
                },
              ].map((s) => (
                <div className="step-card" key={s.n}>
                  <div className="step-num">{s.n}</div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ELIGIBILITY + CRITERIA ── */}
        <section className="elig-section" id="eligibility">
          <div className="section-inner">
            <div className="elig-grid">
              {/* Left */}
              <div>
                <div className="elig-col-head">Who Can Apply</div>
                <div className="elig-col-title">Eligibility at a Glance</div>
                <div className="elig-list">
                  {[
                    {
                      title: "Academic Class",
                      desc: "Currently enrolled in Class X (10th Standard) during the ongoing academic year"
                    },
                    {
                      title: "Recognized School",
                      desc: "CBSE, ICSE, State Board or any equivalent recognized education board"
                    },
                    {
                      title: "Documents Required",
                      desc: "Passport photo, School ID, previous marksheet, and Aadhaar/UID"
                    },
                    {
                      title: "Completely Free",
                      desc: "No application fee, no exam fee. Beware of anyone asking for payment"
                    },
                  ].map((e) => (
                    <div className="elig-item" key={e.title}>
                      <div className="elig-dot" />
                      <div>
                        <div className="elig-item-title">{e.title}</div>
                        <div className="elig-item-desc">{e.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div>
                <div className="elig-col-head">Selection Criteria</div>
                <div className="elig-col-title">Merit Screening Engine</div>
                <div className="criteria-list">
                  {[
                    { label: "Academic Score", pct: 40 },
                    { label: "Financial Need", pct: 30 },
                    { label: "Motivation", pct: 20 },
                    { label: "School Recommendation", pct: 10 },
                    { label: "Area Priority", pct: 10 },
                  ].map((c) => (
                    <div className="criteria-row" key={c.label}>
                      <div className="criteria-top">
                        <span>{c.label}</span>
                        <span className="criteria-pct">{c.pct}%</span>
                      </div>
                      <div className="criteria-bar-bg">
                        <div className="criteria-bar-fill" style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="criteria-note">
                  Auto-scoring and candidate ranking is done by the digital merit engine.
                  Final approval is by the ADERF Selection Committee.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="cta-section" id="apply">
          <div className="cta-inner">
            <div>
              <span className="cta-tag">Applications Open</span>
              <h2 className="cta-heading">
                उत्कर्ष Scholarship 2026 is Now<br />
                <span>Accepting Applications</span>
              </h2>
              <p className="cta-body">
                Launched every year on 15 June. Register before the deadline to ensure your application
                is reviewed. Only 11 scholarship seats are available.
              </p>
              <div className="cta-btns">
                <a href="#" className="btn-primary">Start Application ↗</a>
                <a href="#eligibility" className="btn-ghost">Check Requirements</a>
              </div>
            </div>
            <div className="cta-date-box">
              <div className="cta-date-label">Program Launch</div>
              <div className="cta-date-num">15</div>
              <div className="cta-date-month">June · Every Year</div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
