/* global React, ReactDOM */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "statement",
  "accentHue": 65,
  "titleFont": "Instrument Serif"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [modalKey, setModalKey] = React.useState(null);
  const [traceKey, setTraceKey] = React.useState(null);

  // apply accent color
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', `oklch(0.74 0.13 ${tweaks.accentHue})`);
    root.style.setProperty('--accent-2', `oklch(0.86 0.06 ${tweaks.accentHue})`);
    root.style.setProperty('--accent-soft', `oklch(0.74 0.13 ${tweaks.accentHue} / 0.12)`);
  }, [tweaks.accentHue]);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--serif', `'${tweaks.titleFont}', 'Times New Roman', serif`);
  }, [tweaks.titleFont]);

  useReveal();
  useScrollProgress();

  const modalData = INTERESTS_DATA.find(d => d.key === modalKey);
  const traceData = TRACE_DATA.find(d => d.key === traceKey);
  const handleCV = () => alert("CV bientôt disponible — placeholder.\nTu pourras déposer ton PDF dans le projet et brancher le bouton dessus.");

  return (
    <>
      <div className="bg-orbs">
        <span className="orb-1"></span>
        <span className="orb-2"></span>
        <span className="orb-3"></span>
        <span className="orb-4"></span>
        <span className="orb-5"></span>
        <span className="orb-6"></span>
      </div>
      <div className="bg-grid"></div>
      <svg className="bg-deco" aria-hidden="true" viewBox="0 0 1200 4000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bg-line-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0"/>
            <stop offset="0.5" stopColor="var(--accent)" stopOpacity="0.4"/>
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <line x1="0" y1="800" x2="1200" y2="850" stroke="url(#bg-line-grad)" strokeWidth="1"/>
        <line x1="0" y1="2200" x2="1200" y2="2150" stroke="url(#bg-line-grad)" strokeWidth="1"/>
        <line x1="0" y1="3400" x2="1200" y2="3450" stroke="url(#bg-line-grad)" strokeWidth="1"/>
        <circle className="bg-dot bg-dot-1" cx="120" cy="600" r="2" fill="var(--accent)"/>
        <circle className="bg-dot bg-dot-2" cx="1080" cy="1400" r="2" fill="var(--accent)"/>
        <circle className="bg-dot bg-dot-3" cx="200" cy="2600" r="2" fill="var(--accent)"/>
        <circle className="bg-dot bg-dot-4" cx="1000" cy="3200" r="2" fill="var(--accent)"/>
      </svg>
      <div className="scroll-progress"></div>
      <Nav />
      <Hero variant={tweaks.heroVariant} />
      <Marquee />
      <Parcours />
      <Interests onOpen={setModalKey} />
      <Experiences onOpenTrace={setTraceKey} />
      <Situation />
      <Competences />
      <Objectifs />
      <QuoteSection />
      <TraceDetails />
      <Contact />

      <InterestModal open={!!modalKey} data={modalData} onClose={() => setModalKey(null)} />
      <TraceModal open={!!traceKey} data={traceData} onClose={() => setTraceKey(null)} />

      <button className="cv-floater" onClick={handleCV}>
        <span className="ic">↓</span>
        Télécharger le CV
      </button>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero">
          <TweakRadio
            label="Variante"
            value={tweaks.heroVariant}
            onChange={(v) => setTweak('heroVariant', v)}
            options={[
              { value: 'statement', label: 'Statement (titre + photo)' },
              { value: 'fullscreen', label: 'Photo plein écran' },
              { value: 'sober', label: 'Sobre & compact' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Accent">
          <TweakSlider
            label="Teinte (hue)"
            value={tweaks.accentHue}
            onChange={(v) => setTweak('accentHue', v)}
            min={0} max={360} step={5}
          />
        </TweakSection>
        <TweakSection title="Typographie titre">
          <TweakRadio
            label="Police"
            value={tweaks.titleFont}
            onChange={(v) => setTweak('titleFont', v)}
            options={[
              { value: 'Instrument Serif', label: 'Instrument Serif (éditorial)' },
              { value: 'Fraunces', label: 'Fraunces (moderne)' },
              { value: 'Cormorant Garamond', label: 'Cormorant (classique)' },
              { value: 'Inter', label: 'Inter (sans-serif)' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
