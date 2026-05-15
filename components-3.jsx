/* global React */
const { useState: useStateS } = React;

// ---------- Compétences ----------
function Competences() {
  const tabs = ['Numériques', 'Gestion', 'Avancées', 'Langues'];
  const [tab, setTab] = useStateS(0);
  // [name, acq, lvl, pct]
  const data = [
    [
      ['Excel avancé','FI / AP','M', 88],
      ['Power Query','AP','AN / M', 72],
      ['Analyse de données','AP','AN / M', 75],
      ['Création de dashboards','AP','M', 85],
      ['Notion','AF','AN', 70],
      ['Outils bureautiques (Word, PowerPoint)','FI / AF','AN', 78],
    ],
    [
      ['Comptabilité','FI / AP','AN / M', 75],
      ['Fiscalité','FI','AN', 60],
      ['Gestion & contrôle de gestion','FI / AP','AN', 72],
      ['Outils comptables (Cegid, Incovar)','AP','AN', 65],
    ],
    [
      ['Optimisation de processus','AP','AN / M', 78],
      ['Automatisation','AP','AN', 70],
      ['Structuration de bases de données','AP','AN', 70],
      ['Création d\'outils d\'aide à la décision','AP','AN / M', 80],
      ['Sensibilité RSE & gestion des déchets','AP','AN', 72],
    ],
    [
      ['Français','—','Natif', 100],
      ['Anglais','FI / AF','M', 80],
    ],
  ];
  const softskills = [
    'Autonomie','Discipline','Adaptabilité','Esprit d\'analyse',
    'Résilience','Travail en équipe','Écoute','Communication professionnelle',
    'Prise d\'initiative','Gestion de projet','Rigueur','Gestion du temps',
    'Esprit stratégique','Résolution de problèmes',
  ];
  return (
    <section id="competences">
      <div className="section-mark">05</div>
      <div className="container">
        <div className="reveal"><span className="eyebrow">Savoir-faire & savoir-être</span></div>
        <h2 className="section-title reveal">Compétences.</h2>

        <div className="skills-legend reveal">
          <div>
            <h4>Modes d'acquisition</h4>
            <div className="legend-grid">
              <div><strong>FI</strong> Formation initiale</div>
              <div><strong>AF</strong> Auto-formation</div>
              <div><strong>ST</strong> Stage</div>
              <div><strong>AP</strong> Alternance / Pratique pro.</div>
            </div>
          </div>
          <div>
            <h4>Niveaux</h4>
            <div className="legend-grid">
              <div><strong>AP</strong> Application</div>
              <div><strong>AN</strong> Analyse</div>
              <div><strong>M</strong> Maîtrise</div>
              <div><strong>EX</strong> Expertise</div>
            </div>
          </div>
        </div>

        <div className="skills-block reveal">
          <h3>Hard Skills</h3>
          <div className="skills-tabs">
            {tabs.map((t, i) => (
              <button key={t} className={'skills-tab' + (tab === i ? ' active' : '')} onClick={() => setTab(i)}>
                {t}
              </button>
            ))}
          </div>
          <div className="skills-list" key={tab}>
            {data[tab].map((row, i) => (
              <div className="skill-item in-view" key={i}>
                <div className="name">{row[0]}</div>
                <div className="meta-row">
                  <div className="acq">{row[1]}</div>
                  <div className="lvl">{row[2]}</div>
                </div>
                <div className="bar" style={{ '--pct': row[3] + '%' }}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-block reveal">
          <h3>Soft Skills</h3>
          <div className="softskills-grid">
            {softskills.map(s => <div key={s} className="soft-chip">{s}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Objectifs ----------
function Objectifs() {
  const data = [
    {
      horizon: 'Court terme',
      when: 'Dans l\'année à venir',
      title: 'Consolider les fondations',
      items: [
        'Intégrer et réussir à l\'EM Strasbourg',
        'Développer mes compétences en gestion, data, IA et optimisation',
        'Améliorer mon organisation personnelle, ma productivité et ma gestion du temps',
      ],
    },
    {
      horizon: 'Moyen terme',
      when: 'Entre 3 et 5 ans',
      title: 'Élargir les horizons',
      items: [
        'Poursuivre ma progression professionnelle',
        'Réaliser un tour du monde pour développer ma vision, mon autonomie et ma compréhension du monde',
        'Reprendre ensuite un emploi ou mes études selon les opportunités et apprentissages de cette expérience',
      ],
    },
    {
      horizon: 'Long terme',
      when: 'Dans 5 ans et au-delà',
      title: 'S\'épanouir et contribuer',
      items: [
        'Évoluer dans une structure à taille humaine, stimulante, moderne et humaine',
        'S\'épanouir dans un environnement qui a du sens',
        'Participer à des projets utiles, innovants et concrets',
      ],
    },
  ];
  return (
    <section id="objectifs">
      <div className="section-mark accent">06</div>
      <div className="container">
        <div className="reveal"><span className="eyebrow">Vision</span></div>
        <h2 className="section-title reveal">Objectifs.</h2>
        <div className="objectives">
          {data.map((d, i) => (
            <div key={i} className={'obj-card reveal delay-' + (i+1)}>
              <div className="horizon">{d.horizon}</div>
              <div className="when">{d.when}</div>
              <h3>{d.title}</h3>
              <ul>
                {d.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Quote ----------
function QuoteSection() {
  return (
    <section className="quote-section reveal">
      <div className="container">
        <blockquote>J'aime comprendre les systèmes, structurer les idées et contribuer à leur amélioration.</blockquote>
        <cite>Alexis Lechat — Portfolio 2025–2026</cite>
      </div>
    </section>
  );
}

// ---------- Galleries (deprecated — kept as no-op for compat) ----------
function Galleries() { return null; }

// ---------- Trace details (data + modal) ----------
const TRACE_DATA = [
  {
    key: 'lcbft',
    eyebrow: 'Preuve / Trace · Cabinet Doucy Consilium',
    title: "Outil d'évaluation",
    titleEm: 'anti-blanchiment',
    titleEnd: '— Fichier Excel.',
    cover: 'assets/couverture/LCBFT.png',
    images: [
      'assets/LCBFT/LCBFTexcel1.png',
      'assets/LCBFT/LCBFTexcel2.png',
      'assets/LCBFT/LCBFTexcel3.png',
    ],
    description: [
      "Ce fichier Excel constitue un outil de conformité développé dans le cadre de la lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT). Il permet de structurer et de sécuriser l'analyse des dossiers clients en automatisant les principales étapes du processus de contrôle.",
      "Grâce à cette automatisation, l'outil permet de standardiser les analyses, de limiter les erreurs humaines et de fiabiliser les contrôles réalisés. Il garantit ainsi le respect des obligations réglementaires tout en améliorant l'efficacité opérationnelle du cabinet.",
    ],
    features: [
      "Intégration de listes réglementaires (pays à risque, liste grise)",
      "Collecte et formalisation des informations clients et des bénéficiaires effectifs",
      "Centralisation des données nécessaires à l'analyse LCB-FT",
      "Application de règles automatisées d'évaluation du risque",
      "Attribution d'un niveau de vigilance (faible, moyen ou élevé)",
      "Prise en compte de plusieurs critères : client, activité, localisation, nature de la mission",
    ],
  },
  {
    key: 'dechets',
    eyebrow: 'Preuve / Trace · VHM Groupe',
    title: "Outil de pilotage de la",
    titleEm: 'gestion des déchets',
    titleEnd: '— Fichier Excel.',
    cover: 'assets/couverture/gestiondechets.png',
    images: [
      'assets/dechets/cover-tri-dechets.png',
      'assets/dechets/dashboard-rse.png',
      'assets/dechets/dashboard-quadrants.png',
      'assets/dechets/dashboard-comparatif.png',
    ],
    description: [
      "Ce fichier Excel constitue un outil de pilotage de la gestion des déchets, développé à partir des données comptables issues du logiciel Incogest. Il permet de transformer des écritures comptables brutes en une base de données structurée et exploitable, afin d'améliorer le suivi des coûts et de soutenir la démarche RSE de l'entreprise.",
      "L'ensemble de ces traitements permet d'obtenir une vision claire et synthétique de l'activité, tout en automatisant les tâches de traitement et en fiabilisant les données. L'outil facilite ainsi la comparaison des prestataires, l'identification d'écarts de performance et la mise en évidence d'axes d'optimisation. Il constitue un véritable support d'aide à la décision, permettant à l'entreprise de mieux piloter ses coûts et de structurer son suivi environnemental.",
    ],
    features: [
      "Extraction automatique des données depuis Incogest via Power Query",
      "Structuration et enrichissement des données dans une base Excel",
      "Utilisation d'une fiche explicative pour standardiser les règles de saisie comptable",
      "Identification des types de déchets grâce à un système de codification intégré",
      "Consolidation des données par fournisseur, secteur et période",
      "Génération d'indicateurs clés (tonnage, coût, coût par tonne)",
      "Analyse dynamique via tableaux croisés dynamiques et segments interactifs",
    ],
  },
];

function TraceModal({ open, data, onClose }) {
  const [lbImages, setLbImages] = React.useState(null);
  const [lbStart, setLbStart] = React.useState(0);

  const openLightbox = (imgs, i) => { setLbImages(imgs); setLbStart(i); };
  const closeLightbox = () => setLbImages(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && !lbImages) onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose, lbImages]);

  if (!data) return null;

  const allImgs = data.images;
  const imgStyle = { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'contrast(1.05)', cursor: 'zoom-in' };

  return (
    <>
      <div className={'modal-overlay' + (open ? ' open' : '')} onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <span className="label">{data.eyebrow}</span>
            <button className="modal-close" onClick={onClose} aria-label="Fermer">×</button>
          </div>
          <div className="modal-body">
            <div className="modal-subtitle">Détail · Fichier Excel</div>
            <h2 className="modal-title">
              {data.title} <em style={{ fontStyle: 'italic', color: 'var(--accent-2)' }}>{data.titleEm}</em> {data.titleEnd}
            </h2>
            {allImgs.length > 3 ? (
              <>
                <div className="modal-cover zoomable" onClick={e => { e.stopPropagation(); openLightbox(allImgs, 0); }}>
                  <img src={allImgs[0]} alt="" style={{ cursor: 'zoom-in' }} />
                </div>
                <div className="modal-gallery">
                  {allImgs.slice(1).map((src, j) => (
                    <div key={j} style={{ aspectRatio: '4/3', overflow: 'hidden', border: '1px solid var(--line)', cursor: 'zoom-in' }}
                      onClick={e => { e.stopPropagation(); openLightbox(allImgs, j + 1); }}>
                      <img src={src} alt="" style={imgStyle} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="modal-gallery">
                {allImgs.map((src, j) => (
                  <div key={j} style={{ aspectRatio: '4/3', overflow: 'hidden', border: '1px solid var(--line)', cursor: 'zoom-in' }}
                    onClick={e => { e.stopPropagation(); openLightbox(allImgs, j); }}>
                    <img src={src} alt="" style={imgStyle} />
                  </div>
                ))}
              </div>
            )}
            <div className="trace-content" style={{ marginTop: 0 }}>
              <div>
                <h4>Description</h4>
                {data.description.map((p, i) => (
                  <p key={i} style={{ marginBottom: 16, color: 'var(--fg-2)', lineHeight: 1.7 }}>{p}</p>
                ))}
              </div>
              <div>
                <h4>Fonctionnement de l'outil</h4>
                <ul>
                  {data.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {lbImages && <Lightbox images={lbImages} startIndex={lbStart} onClose={closeLightbox} />}
    </>
  );
}

function TraceDetails() { return null; }

Object.assign(window, { TRACE_DATA, TraceModal });

// ---------- Contact ----------
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="reveal"><span className="eyebrow">Contact</span></div>
        <h1 className="contact-title reveal">Me <em>contacter</em>.</h1>
        <div className="contact-grid reveal">
          <a className="contact-card" href="https://www.linkedin.com/in/alexis-lechat-968a062a8/" target="_blank" rel="noreferrer">
            <div className="label"><span>LinkedIn</span><span className="arr">↗</span></div>
            <div className="value">Alexis Lechat</div>
          </a>
          <a className="contact-card" href="tel:+33783254917">
            <div className="label"><span>Téléphone</span><span className="arr">↗</span></div>
            <div className="value">07 83 25 49 17</div>
          </a>
          <a className="contact-card" href="mailto:alexis.lechat67@gmail.com">
            <div className="label"><span>Email</span><span className="arr">↗</span></div>
            <div className="value">alexis.lechat67@gmail.com</div>
          </a>
        </div>
        <div className="footer">
          <span>Alexis Lechat · Portfolio 2025–2026</span>
          <span className="footer-status"><span className="dot"></span>Disponible pour stage & alternance</span>
          <span>Strasbourg · FR</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Competences, Objectifs, QuoteSection, Galleries, TraceDetails, Contact });
