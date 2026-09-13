const { Button, Wordmark } = window.AriumDesignSystem_4c6a30 || {};

const introSeenKey = 'ar_intro_seen_v1';

// The camera settles into a centered composition with empty space below the
// laptop from ~6.8s on in both clips (each is an 8s loop).
const CTA_START = 6.8;

function IntroScene() {
  const reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Computed at component-render time (not module-eval time): the page's
  // layout is guaranteed settled by then, whereas a top-level `matchMedia`
  // check can run before the viewport has real dimensions and misfire.
  const isMobileViewport = window.innerWidth <= 768;
  const videoSrc = isMobileViewport ? 'assets/intro-video-mobile.mp4' : 'assets/intro-video.mp4';
  const posterSrc = isMobileViewport ? 'assets/intro-poster-mobile.jpg' : 'assets/intro-poster.jpg';
  const [visible, setVisible] = React.useState(() => {
    try { return !localStorage.getItem(introSeenKey); } catch (e) { return true; }
  });
  const [closing, setClosing] = React.useState(false);
  const [ctaVisible, setCtaVisible] = React.useState(reduced);
  const [videoFailed, setVideoFailed] = React.useState(false);
  const [videoPlaying, setVideoPlaying] = React.useState(false);
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
      {/* The poster sits underneath as its own layer and stays put; the video
          fades in over it once frames actually start rendering (the
          'playing' event), so any buffering delay before that reads as a
          calm crossfade instead of the browser's raw poster-to-frame pop. */}
      <img
        src={posterSrc}
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {showVideo && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          preload="auto"
          onPlaying={() => setVideoPlaying(true)}
          onEnded={() => setCtaVisible(true)}
          onError={() => { setVideoFailed(true); setCtaVisible(true); }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: videoPlaying ? 1 : 0,
            transition: 'opacity .5s ease',
          }}
        />
      )}

      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '9%',
          transform: ctaVisible ? 'translate(-50%,0) scale(1)' : 'translate(-50%,14px) scale(.92)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 18,
          opacity: ctaVisible ? 1 : 0,
          transition: 'opacity .6s ease, transform .6s cubic-bezier(.34,1.56,.64,1)',
          pointerEvents: ctaVisible ? 'auto' : 'none',
        }}
      >
        {Wordmark && <Wordmark size={20} />}
        {Button && (
          window.BeamWrap ? (
            <window.BeamWrap>
              <Button size="lg" onClick={dismiss}>Começar</Button>
            </window.BeamWrap>
          ) : (
            <Button size="lg" onClick={dismiss}>Começar</Button>
          )
        )}
      </div>
    </div>
  );
}

window.IntroScene = IntroScene;
