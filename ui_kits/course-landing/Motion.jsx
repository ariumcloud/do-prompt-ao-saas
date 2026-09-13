/* Arium — motion helpers for the course landing page.
   Terminal caret, scroll-driven typing, and IntersectionObserver reveals.
   Kept local to the kit: passive listeners, one rAF per frame, no filters. */

const ariumReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------------- Caret --- */

function Caret({ height = '1em', width = 2, state = 'blink', style }) {
  const walking = state === 'walk';
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width,
        height,
        verticalAlign: 'text-bottom',
        marginLeft: '.12em',
        marginBottom: '-.06em',
        background: 'var(--ar-violet-400)',
        boxShadow: '0 0 12px rgba(140,122,255,.65)',
        animation: walking || ariumReduced ? 'none' : 'arium-caret-blink 1.06s steps(1) infinite',
        ...style,
      }}
    />
  );
}

/* ----------------------------------------------------- scroll progress --- */

function ariumUseScrollProgress(ref, opts) {
  const { driver = 'viewport', floor = 0, span = 260, startVh = 0.9, endVh = 0.45 } = opts || {};
  const [p, setP] = React.useState(ariumReduced ? 1 : floor);
  React.useEffect(() => {
    if (ariumReduced) return undefined;
    let raf = 0;
    const calc = () => {
      raf = 0;
      let t = 0;
      if (driver === 'page') {
        t = Math.min(1, Math.max(0, window.scrollY / span));
      } else {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const start = vh * startVh;
        const end = vh * endVh;
        t = (start - r.top) / Math.max(1, start - end);
        t = Math.min(1, Math.max(0, t));
      }
      setP(floor + (1 - floor) * t);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [driver, floor, span, startVh, endVh]);
  return p;
}

function ariumUseWalking(progress) {
  const [walking, setWalking] = React.useState(false);
  const prev = React.useRef(progress);
  React.useEffect(() => {
    if (Math.abs(progress - prev.current) < 0.0008) return undefined;
    prev.current = progress;
    setWalking(true);
    const id = setTimeout(() => setWalking(false), 170);
    return () => clearTimeout(id);
  }, [progress]);
  return walking;
}

/* ------------------------------------------------------------ ScrollType --- */
/* Reveals `lines` character by character as the scroll progresses. The full
   text always occupies its final space (the unrevealed tail is transparent),
   so nothing reflows while typing. */

function ScrollType({ lines = [], driver = 'viewport', floor = 0, span = 260, startVh = 0.9, endVh = 0.45, caretWidth = 3, style, ...rest }) {
  const ref = React.useRef(null);
  const progress = ariumUseScrollProgress(ref, { driver, floor, span, startVh, endVh });
  const walking = ariumUseWalking(progress);
  const total = lines.reduce((n, l) => n + l.length, 0);
  const shown = Math.round(progress * total);

  let consumed = 0;
  const rendered = lines.map((line, i) => {
    const before = consumed;
    consumed += line.length;
    const cut = Math.min(line.length, Math.max(0, shown - before));
    const isCaretLine = shown >= before && shown <= consumed && (cut > 0 || i === 0 || shown === before);
    return (
      <span key={i} style={{ display: 'block' }}>
        <span>{line.slice(0, cut)}</span>
        <span style={{ color: 'transparent' }}>{line.slice(cut)}</span>
        {isCaretLine && <Caret width={caretWidth} state={walking ? 'walk' : 'blink'} style={{ marginLeft: cut ? '.1em' : 0 }} />}
      </span>
    );
  });

  return (
    <span ref={ref} style={style} {...rest}>
      {rendered}
    </span>
  );
}

/* ---------------------------------------------------------------- Reveal --- */

function Reveal({ as = 'div', index = 0, stagger = 70, y = 18, once = true, children, style, ...rest }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(ariumReduced);
  React.useEffect(() => {
    if (ariumReduced || seen) return undefined;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setSeen(false);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, seen]);

  return React.createElement(
    as,
    {
      ref,
      style: {
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : `translate3d(0,${y}px,0)`,
        transition: `opacity 560ms var(--ease-out-soft) ${index * stagger}ms, transform 560ms var(--ease-out-soft) ${index * stagger}ms`,
        willChange: seen ? 'auto' : 'opacity, transform',
        ...style,
      },
      ...rest,
    },
    children
  );
}

Object.assign(window, { Caret, ScrollType, Reveal });
