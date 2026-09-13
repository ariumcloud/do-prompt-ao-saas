const { Button, Wordmark } = window.AriumDesignSystem_4c6a30 || {};

const introSeenKey = 'ar_intro_seen_v1';
const introPrompt = 'cria um SaaS de assinaturas com login, dashboard e cobrança recorrente';

function IntroDashboardMock() {
  const bars = [38, 62, 45, 78, 54, 90, 60];
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: '9% 8%', gap: '6%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ width: 10, height: 10, borderRadius: 3, background: 'var(--text-accent,#A090FF)' }} />
          <span style={{ width: '34%', height: 8, borderRadius: 4, background: 'rgba(254,253,255,.5)' }} />
        </span>
        <span style={{ width: '18%', height: 16, borderRadius: 8, background: 'var(--text-accent,#A090FF)' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '5%' }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ height: '15%', minHeight: 26, borderRadius: 8, background: 'rgba(254,253,255,.08)', border: '1px solid rgba(254,253,255,.14)', opacity: 0, animation: `ar-intro-pop .5s ease forwards ${0.1 + i * 0.12}s` }}
          />
        ))}
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '4%', padding: '4% 0' }}>
        {bars.map((h, i) => (
          <span
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              borderRadius: '3px 3px 0 0',
              background: 'linear-gradient(180deg, var(--text-accent,#A090FF), rgba(160,144,255,.25))',
              opacity: 0,
              transform: 'scaleY(0)',
              transformOrigin: 'bottom',
              animation: `ar-intro-bar .5s cubic-bezier(.22,.61,.36,1) forwards ${0.55 + i * 0.07}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function IntroScene() {
  const reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [visible, setVisible] = React.useState(() => {
    try { return !localStorage.getItem(introSeenKey); } catch (e) { return true; }
  });
  const [stage, setStage] = React.useState(reduced ? 'done' : 'enter');
  const [typed, setTyped] = React.useState(reduced ? introPrompt.length : 0);
  const [closing, setClosing] = React.useState(false);

  React.useEffect(() => {
    if (!visible || reduced) return undefined;
    document.body.classList.add('ar-intro-lock');
    const t = setTimeout(() => setStage('type'), 900);
    return () => clearTimeout(t);
  }, [visible, reduced]);

  React.useEffect(() => {
    if (!visible || reduced || stage !== 'type') return undefined;
    let raf;
    let t0 = null;
    const dur = 1500;
    const step = (t) => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / dur);
      setTyped(Math.round(p * introPrompt.length));
      if (p < 1) raf = requestAnimationFrame(step);
      else setTimeout(() => setStage('build'), 400);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [stage, visible, reduced]);

  React.useEffect(() => {
    if (!visible || reduced || stage !== 'build') return undefined;
    const t = setTimeout(() => setStage('done'), 1500);
    return () => clearTimeout(t);
  }, [stage, visible, reduced]);

  const dismiss = () => {
    setClosing(true);
    document.body.classList.remove('ar-intro-lock');
    try { localStorage.setItem(introSeenKey, '1'); } catch (e) { /* private mode: intro just replays */ }
    setTimeout(() => setVisible(false), 500);
  };

  if (!visible) return null;

  const showScreenContent = stage !== 'enter';
  const showDashboard = stage === 'build' || stage === 'done';
  const showCta = stage === 'done';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Introdução"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#060607',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 34,
        opacity: closing ? 0 : 1,
        transition: 'opacity .5s ease',
        pointerEvents: closing ? 'none' : 'auto',
      }}
    >
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 55% at 50% 40%, rgba(74,56,200,.28) 0%, rgba(6,6,7,0) 70%)' }} />

      <div style={{ position: 'relative', width: 'clamp(280px,46vw,560px)', perspective: 1400 }}>
        <div
          style={{
            position: 'relative',
            aspectRatio: '16/10.2',
            borderRadius: '14px 14px 4px 4px',
            border: '1px solid rgba(254,253,255,.16)',
            background: 'linear-gradient(155deg,#141319,#08080b)',
            boxShadow: '0 40px 90px rgba(0,0,0,.6)',
            transformOrigin: 'bottom center',
            transform: reduced ? 'none' : (stage === 'enter' ? 'rotateX(-92deg)' : 'rotateX(0deg)'),
            transition: 'transform .85s cubic-bezier(.22,.61,.36,1)',
            opacity: reduced ? 1 : (stage === 'enter' ? 0 : 1),
            overflow: 'hidden',
          }}
        >
          <span aria-hidden="true" style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 6, height: 6, borderRadius: '50%', background: 'rgba(254,253,255,.25)' }} />
          <div style={{ position: 'absolute', inset: '9% 6% 6%', borderRadius: 6, background: '#0a0a0d', border: '1px solid rgba(254,253,255,.08)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: showDashboard ? 1 : 0, transition: 'opacity .5s ease' }}>
              <IntroDashboardMock />
            </div>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                padding: '7% 8%',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(11px,1.6vw,15px)',
                color: '#D9D6FF',
                opacity: showDashboard ? 0 : (showScreenContent ? 1 : 0),
                transition: 'opacity .3s ease',
              }}
            >
              <span style={{ color: 'rgba(217,214,255,.5)' }}>{'$ '}</span>
              {introPrompt.slice(0, typed)}
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  width: '0.5em',
                  height: '1em',
                  verticalAlign: '-0.15em',
                  marginLeft: 2,
                  background: '#A090FF',
                  animation: typed < introPrompt.length ? 'none' : 'ar-blink 1s step-end infinite',
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ height: 10, margin: '0 4%', borderRadius: '0 0 8px 8px', background: 'linear-gradient(180deg,#1c1b22,#0c0c0f)', boxShadow: '0 12px 24px rgba(0,0,0,.5)' }} />
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 18,
          opacity: showCta ? 1 : 0,
          transform: showCta ? 'none' : 'translateY(14px)',
          transition: 'opacity .5s ease, transform .5s ease',
          pointerEvents: showCta ? 'auto' : 'none',
        }}
      >
        {Wordmark && <Wordmark size={20} />}
        {Button && <Button size="lg" onClick={dismiss}>Começar</Button>}
      </div>
    </div>
  );
}

window.IntroScene = IntroScene;
