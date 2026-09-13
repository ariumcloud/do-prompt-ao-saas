const { Button, Wordmark } = window.AriumDesignSystem_4c6a30 || {};

const introSeenKey = 'ar_intro_seen_v1';

// The camera settles into a centered composition with empty space below the
// laptop from ~6.8s on (source clip is 8s, assets/intro-video.mp4).
const CTA_START = 6.8;

function IntroScene() {
  const reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [visible, setVisible] = React.useState(() => {
    try { return !localStorage.getItem(introSeenKey); } catch (e) { return true; }
  });
  const [closing, setClosing] = React.useState(false);
  const [ctaVisible, setCtaVisible] = React.useState(reduced);
  const [videoFailed, setVideoFailed] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (!visible) return undefined;
    document.body.classList.add('ar-intro-lock');
    return () => document.body.classList.remove('ar-intro-lock');
  }, [visible]);

  React.useEffect(() => {
    if (!visible || reduced || videoFailed || ctaVisible) return undefined;
    const video = videoRef.current;
    if (!video) return undefined;
    let raf;
    const tick = () => {
      if (video.currentTime >= CTA_START) { setCtaVisible(true); return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, reduced, videoFailed, ctaVisible]);

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
        opacity: closing ? 0 : 1,
        transition: 'opacity .5s ease',
        pointerEvents: closing ? 'none' : 'auto',
      }}
    >
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
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <img
          src="assets/intro-poster.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '9%',
          transform: ctaVisible ? 'translate(-50%,0)' : 'translate(-50%,14px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 18,
          opacity: ctaVisible ? 1 : 0,
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
