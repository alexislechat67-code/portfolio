/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

// ---------- Reveal hook ----------
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ---------- Scroll progress ----------
function useScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

// ---------- Nav ----------
function Nav() {
  return (
    <nav className="nav">
      <a href="#hero" className="nav-brand">
        <span className="nav-brand-dot"></span>
        Alexis Lechat <span style={{ color: 'var(--fg-3)' }}>· 19</span>
      </a>
      <div className="nav-links">
        <a href="#parcours">Parcours</a>
        <a href="#interets">Intérêts</a>
        <a href="#experiences">Expériences</a>
        <a href="#situation">Situation</a>
        <a href="#competences">Compétences</a>
        <a href="#objectifs">Objectifs</a>
      </div>
      <a href="#contact" className="nav-cta">Contact ↗</a>
    </nav>
  );
}

// ---------- Hero ----------
function Hero({ variant }) {
  const meta = (
    <div className="hero-meta">
      <span>Étudiant en gestion</span>
      <span>Data · IA · Process</span>
      <span>Strasbourg · FR</span>
    </div>
  );
  const titleStandard = (
    <h1 className="hero-title">
      Étudiant <em>en gestion</em><br />
      orienté <span className="accent">data</span>, <em>IA</em> &<br />
      amélioration des<br />processus.
    </h1>
  );
  const lede = (
    <p className="hero-lede">
      Je suis Alexis Lechat, 19 ans, étudiant en gestion. À travers mes études, mon alternance
      et mes projets personnels, je développe progressivement une approche orientée data,
      intelligence artificielle et création d'outils d'aide à la décision.
    </p>
  );
  const ctas = (
    <div className="hero-ctas">
      <a href="#parcours" className="btn btn-primary">
        Découvrir mon parcours <span className="arrow">→</span>
      </a>
      <a href="#competences" className="btn">
        Voir mes compétences <span className="arrow">↓</span>
      </a>
    </div>
  );

  if (variant === 'fullscreen') {
    return (
      <section id="hero" className="hero" data-variant="fullscreen"
        style={{ '--hero-photo': "url('assets/photo-alexis.jpg')" }}>
        <div className="hero-fullbg" />
        <div className="hero-content-overlay reveal">
          {meta}
          {titleStandard}
          {lede}
          {ctas}
        </div>
      </section>
    );
  }

  if (variant === 'sober') {
    return (
      <section id="hero" className="hero" data-variant="sober">
        <div className="hero-bg-glow" />
        <div className="container">
          <div className="hero-grid">
            <div className="reveal">
              {meta}
              <h1 className="hero-title">
                Alexis Lechat — <em>étudiant en gestion</em> orienté data & IA.
              </h1>
              {lede}
              {ctas}
            </div>
            <div className="hero-portrait-wrap reveal delay-2">
              <img src="assets/photo-alexis.jpg" alt="Alexis Lechat" className="hero-portrait" />
              <div className="hero-portrait-meta">
                <span>2025 — 26</span>
                <span>FR</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // statement (default)
  return (
    <section id="hero" className="hero" data-variant="statement">
      <div className="hero-bg-glow" />
      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            {meta}
            {titleStandard}
            {lede}
            {ctas}
          </div>
          <div className="hero-portrait-wrap reveal delay-2">
            <img src="assets/photo-alexis.jpg" alt="Alexis Lechat" className="hero-portrait" />
            <div className="hero-portrait-meta">
              <span>Portrait — 2025</span>
              <span>01 / 01</span>
            </div>
          </div>
        </div>
        <div className="hero-quote">
          « J'aime comprendre les systèmes, structurer les idées et contribuer à leur amélioration. »
        </div>
      </div>
    </section>
  );
}

// ---------- Marquee ----------
function Marquee() {
  const items = ['Optimisation', 'Data', 'IA', 'Excel avancé', 'Power Query', 'Dashboards', 'Aide à la décision', 'RSE', 'Process', 'Notion'];
  const block = items.map((it, i) => (
    <React.Fragment key={i}>
      <span>{it}</span>
      <span className="dot">✦</span>
    </React.Fragment>
  ));
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>{block}</span>
        <span>{block}</span>
      </div>
    </div>
  );
}

// ---------- Parcours ----------
function Parcours() {
  return (
    <section id="parcours">
      <div className="section-mark">01</div>
      <div className="container">
        <div className="reveal"><span className="eyebrow">Formation</span></div>
        <h2 className="section-title reveal">Parcours.</h2>
        <div className="parcours-grid">
          <div className="parcours-card reveal">
            <div className="step"><span>Lycée</span><span className="num">01</span></div>
            <h3>Bac Général</h3>
            <p>Spécialités : SES et Mathématiques.</p>
            <div className="badges">
              <span className="badge featured">Mention Très Bien</span>
            </div>
          </div>
          <div className="parcours-card reveal delay-1">
            <div className="step"><span>Études supérieures</span><span className="num">02</span></div>
            <h3>BUT GEA</h3>
            <p>Gestion des Entreprises et des Administrations.</p>
            <div className="badges">
              {['Contrôle de gestion','Comptabilité','Finance','Fiscalité','RH','Management','Gestion','Droit','Droit social','Droit des entreprises'].map(b =>
                <span key={b} className="badge">{b}</span>
              )}
            </div>
          </div>
        </div>
        <div className="parcours-bilan reveal">
          <div className="parcours-bilan-title">Ce que ce parcours m'a apporté</div>
          <ul className="parcours-bilan-grid">
            <li>Une direction plus claire pour mon avenir</li>
            <li>Une base solide de connaissances en gestion</li>
            <li>Une meilleure compréhension du fonctionnement de l'entreprise</li>
            <li>Une vision globale des différentes dimensions de l'organisation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- Centres d'intérêt ----------
const INTERESTS_DATA = [
  {
    key: 'musique',
    num: '01',
    title: 'Musique',
    short: "Place importante dans mon quotidien. Très forte consommation musicale et rapport personnel fort à cet univers. La musique accompagne ma concentration, mes réflexions et mes moments de création.",
    imgs: [
      { src: 'assets/musique/radiohead.png', label: 'Radiohead' },
      { src: 'assets/musique/gunsandroses.png', label: "Guns N' Roses" },
      { src: 'assets/musique/bushi.png', label: 'Bushi' },
    ],
    long: "La musique a une vraie place dans mon quotidien. J'écoute des styles et des univers assez différents, que ce soit Radiohead, Guns N' Roses ou Bushi. J'aime autant l'énergie brute de certains artistes que des ambiances plus modernes ou plus sensibles. La musique m'accompagne souvent quand je réfléchis, quand je travaille ou simplement quand j'ai besoin de me mettre dans une bulle.",
    artists: ['Radiohead', "Guns N' Roses", 'Bushi'],
  },
  {
    key: 'philo',
    num: '02',
    title: 'Philosophie',
    short: "Intérêt pour Marc Aurèle, Nietzsche, Camus, Sartre, Carl Jung. Attrait pour les idées, la réflexion, la compréhension de soi et la construction d'une vision personnelle du monde.",
    imgs: [
      { src: 'assets/philosophie/marcaurel.png', label: 'Marc Aurèle' },
      { src: 'assets/philosophie/carljung.png', label: 'Carl Jung' },
      { src: 'assets/philosophie/kafka.png', label: 'Kafka' },
    ],
    long: "La philosophie m'intéresse surtout pour ce qu'elle apporte en réflexion sur soi et sur le monde. J'aime lire ou découvrir des auteurs comme Marc Aurèle, Jung ou Kafka, parce qu'ils ont chacun une manière différente de questionner la vie, les comportements ou les idées. C'est un univers qui m'aide à prendre du recul et à nourrir ma réflexion personnelle.",
    artists: ['Marc Aurèle', 'Carl Jung', 'Kafka', 'Nietzsche', 'Camus', 'Sartre'],
  },
  {
    key: 'cinema',
    num: '03',
    title: 'Cinéma',
    short: "Goût pour les films qui font rêver autant qu'ils font réfléchir. Intérêt pour l'action, la science-fiction et la fantasy. Le cinéma comme source d'inspiration et d'ouverture sur le monde.",
    imgs: [
      { src: 'assets/cinema/fightclub.png', label: 'Fight Club' },
      { src: 'assets/cinema/her.png', label: 'Her' },
      { src: 'assets/cinema/odysee.png', label: "2001 : L'Odyssée de l'espace" },
    ],
    long: "Le cinéma fait partie des choses qui m'inspirent le plus. J'aime les films qui ont une vraie identité visuelle mais aussi quelque chose à raconter en profondeur, comme Fight Club, Her ou 2001 : L'Odyssée de l'espace. Ce que j'aime, c'est quand un film arrive à faire rêver, réfléchir ou laisser une impression durable après le visionnage.",
    artists: ['Fight Club', 'Her', "2001 : L'Odyssée de l'espace"],
  },
];

function Interests({ onOpen }) {
  return (
    <section id="interets">
      <div className="section-mark accent">02</div>
      <div className="container">
        <div className="reveal"><span className="eyebrow">Personnel</span></div>
        <h2 className="section-title reveal">Centres <em>d'intérêt</em>.</h2>
      </div>
      <div className="interests reveal">
        {INTERESTS_DATA.map((d) => (
          <button key={d.key} className={`interest-card interest-${d.key}`} onClick={() => onOpen(d.key)} style={{ background: 'transparent', border: 0, textAlign: 'left', font: 'inherit', color: 'inherit', cursor: 'pointer' }}>
            <div className="card-glow" aria-hidden="true"></div>
            <div className="num">{d.num}</div>
            <h3>{d.title}</h3>
            <div className="images">
              {d.imgs.map((im, j) => <img key={j} src={im.src} alt={im.label} />)}
            </div>
            <p>{d.short}</p>
            <div className="explore">Explorer →</div>
          </button>
        ))}
      </div>
    </section>
  );
}

function InterestModal({ open, data, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!data) return null;
  return (
    <div className={'modal-overlay' + (open ? ' open' : '')} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="label">Centres d'intérêt · {data.title}</span>
          <button className="modal-close" onClick={onClose} aria-label="Fermer">×</button>
        </div>
        <div className="modal-body">
          <div className="modal-subtitle">— {data.num}</div>
          <h2 className="modal-title">{data.title}.</h2>
          <div className="modal-gallery">
            {data.imgs.map((im, j) => <img key={j} src={im.src} alt={im.label} />)}
          </div>
          <p className="modal-text">{data.long}</p>
          <div className="modal-list">
            {data.artists.map((a, j) => (
              <div className="modal-list-item" key={j}>
                <span className="num">{String(j + 1).padStart(2, '0')}</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { INTERESTS_DATA, InterestModal });

Object.assign(window, { Nav, Hero, Marquee, Parcours, Interests, useReveal, useScrollProgress });
