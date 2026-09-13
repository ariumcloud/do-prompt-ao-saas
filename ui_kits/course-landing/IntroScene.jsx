const { Button, Wordmark } = window.AriumDesignSystem_4c6a30 || {};

const introSeenKey = 'ar_intro_seen_v1';
const introPrompt = 'cria um SaaS de assinaturas com login, dashboard e cobrança recorrente';

// Timings measured against the source clip (assets/intro-video.mp4, 8s):
// the AI prompt box is on screen and empty ~2.3s, fully "written" by ~3.0s,
// then a zoom transition swallows it by ~3.4s. The camera settles back into
// a centered composition with empty space below the laptop from ~6.8s on.
const TYPE_START = 2.3;
const TYPE_END = 3.05;
const TYPE_FADE_END = 3.35;
const CTA_START = 6.8;

function IntroScene() {
  const reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [visible, setVisible] = React.useState(() => {
    try { return !localStorage.getItem(introSeenKey); } catch (e) { return true; }
  });
  const [closing, setClosing] = React.useState(false);
  const [typedChars, setTypedChars] = React.useState(0);
  const [textOpacity, setTextOpacity] = React.useState(0);
  const [ctaVisible, setCtaVisible] = React.useState(reduced);
  const [videoFailed, setVideoFailed] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (!visible) return undefined;
    document.body.classList.add('ar-intro-lock');
    return () => document.body.classList.remove('ar-intro-lock');
  }, [visible]);

  React.useEffect(() => {
    if (!visible || reduced || videoFailed) return undefined;
    const video = videoRef.current;
    if (!video) return undefined;
    let raf;
    const tick = () => {
      const t = video.currentTime;
      if (t <= TYPE_START) {
        setTypedChars(0);
        setTextOpacity(0);
      } else if (t < TYPE_END) {
        setTypedChars(Math.round(((t - TYPE_START) / (TYPE_END - TYPE_START)) * introPrompt.length));
        setTextOpacity(1);
      } else if (t < TYPE_FADE_END) {
        setTypedChars(introPrompt.length);
        setTextOpacity(1 - (t - TYPE_END) / (TYPE_FADE_END - TYPE_END));
      } else {
        setTextOpacity(0);
      }
      if (t >= CTA_START) setCtaVisible(true);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, reduced, videoFailed]);

  const dismiss = () => {
    setClosing(true);
    document.body.classList.remove('ar-intro-lock');
    try { localStorage.setItem(introSeenKey, '1'); } catch (e) { /* private mode: intro just replays */ }
    setTimeout(() => setVisible(false), 500);
  };

  if (!visible) return null;

  const showVideo = !reduced && !videoFailed;

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
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(12px,3vh,32px)',
        opacity: closing ? 0 : 1,
        transition: 'opacity .5s ease',
        pointerEvents: closing ? 'none' : 'auto',
      }}
    >
      {/* Stage matches the source video's own 16:9 frame exactly (letterboxed
          via flex-centering rather than object-fit:cover) so nothing about the
          scene is ever cropped — a tall mobile viewport would otherwise slice
          off both sides of the laptop under cover. The typed-prompt overlay is
          positioned relative to this stage so it always lands on the laptop
          screen regardless of viewport shape; the CTA sits below the stage as
          a normal block so it never overlaps the video's own content. */}
      <div style={{ position: 'relative', width: 'min(100%, 177.78vh)', maxHeight: '82vh', aspectRatio: '16/9' }}>
        {showVideo ? (
          <video
            ref={videoRef}
            src="assets/intro-video.mp4"
            poster="assets/intro-poster.jpg"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setCtaVisible(true)}
            onError={() => { setVideoFailed(true); setCtaVisible(true); }}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          />
        ) : (
          <img
            src="assets/intro-poster.jpg"
            alt=""
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          />
        )}

        {showVideo && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '50%',
              top: '45%',
              transform: 'translate(-50%,-50%)',
              width: 'min(50%, 460px)',
              textAlign: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(9px,1.5vw,15px)',
              color: '#EDEBFF',
              textShadow: '0 0 16px rgba(160,144,255,.9), 0 0 4px rgba(255,255,255,.6)',
              opacity: textOpacity,
              pointerEvents: 'none',
            }}
          >
            {introPrompt.slice(0, typedChars)}
            {typedChars > 0 && typedChars < introPrompt.length && (
              <span
                style={{
                  display: 'inline-block',
                  width: '0.09em',
                  minWidth: 2,
                  height: '0.9em',
                  marginLeft: 2,
                  verticalAlign: '-0.1em',
                  background: '#EDEBFF',
                }}
              />
            )}
          </div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(10px,1.8vh,18px)',
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity .6s ease, transform .6s ease',
          pointerEvents: ctaVisible ? 'auto' : 'none',
        }}
      >
        {Wordmark && <Wordmark size={20} />}
        {Button && <Button size="lg" onClick={dismiss}>Começar</Button>}
      </div>
    </div>
  );
}

window.IntroScene = IntroScene;
