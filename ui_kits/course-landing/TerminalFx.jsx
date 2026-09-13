// Terminal cursor + scroll-driven typing + scroll reveal. Shared by the landing sections.
const arReduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

const arScrollSubs = new Set();
let arTicking = false;
function arOnScroll() {
  if (arTicking) return;
  arTicking = true;
  requestAnimationFrame(() => { arTicking = false; arScrollSubs.forEach((f) => f()); });
}
window.addEventListener('scroll', arOnScroll, { passive: true });
window.addEventListener('resize', arOnScroll, { passive: true });

function TerminalCursor({ active, size = '0.95em' }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: '0.1em',
        minWidth: 3,
        height: size,
        marginLeft: '0.1em',
        verticalAlign: '-0.1em',
        background: 'var(--text-accent, #A090FF)',
        boxShadow: '0 0 14px rgba(160,144,255,.95), 0 0 4px rgba(255,255,255,.6)',
        animation: active ? 'none' : 'ar-blink 1.05s step-end infinite',
      }}
    />
  );
}

// mode="mount": types once on mount (hero, above the fold).
// mode="band": reveal driven purely by scroll position, latched so it never un-types.
function TerminalType({ lines, mode = 'band', style, as: Tag = 'span' }) {
  const ref = React.useRef(null);
  const [p, setP] = React.useState(arReduced ? 1 : 0);
  const [typing, setTyping] = React.useState(false);
  const latch = React.useRef(0);
  const timer = React.useRef(null);

  const bump = React.useCallback((next) => {
    if (next <= latch.current) return;
    latch.current = next;
    setP(next);
    setTyping(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setTyping(false), 170);
  }, []);

  React.useEffect(() => {
    if (arReduced) return;
    if (mode === 'mount') {
      let raf, t0;
      const step = (t) => {
        if (!t0) t0 = t;
        const next = Math.min(1, (t - t0) / 1400);
        bump(next);
        if (next < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => { cancelAnimationFrame(raf); clearTimeout(timer.current); };
    }
    const read = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const start = vh * 0.92;
      const end = vh * 0.46;
      bump(Math.max(0, Math.min(1, (start - r.top) / (start - end))));
    };
    arScrollSubs.add(read);
    read();
    return () => { arScrollSubs.delete(read); clearTimeout(timer.current); };
  }, [mode, bump]);

  const total = lines.reduce((n, l) => n + l.length, 0);
  const shown = Math.round(p * total);
  let left = shown;
  const typed = lines.map((l) => { const s = l.slice(0, Math.max(0, left)); left -= l.length; return s; });
  const at = typed.findIndex((s, i) => s.length < lines[i].length);

  return (
    <Tag ref={ref} style={{ position: 'relative', display: 'block', ...style }}>
      <span aria-hidden="true" style={{ visibility: 'hidden' }}>
        {lines.map((l, i) => (<React.Fragment key={i}>{i ? <br /> : null}{l}</React.Fragment>))}
      </span>
      <span style={{ position: 'absolute', left: 0, right: 0, top: 0 }}>
        {typed.map((l, i) => (
          <React.Fragment key={i}>
            {i ? <br /> : null}
            {l}
            {(at === -1 ? i === lines.length - 1 : i === at) ? <TerminalCursor active={typing} /> : null}
          </React.Fragment>
        ))}
      </span>
    </Tag>
  );
}

function arInitReveal() {
  if (arReduced || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.style.opacity = '1';
      e.target.style.transform = 'none';
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });

  const prep = (el, delay) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .55s cubic-bezier(.22,.61,.36,1) ' + delay + 'ms, transform .55s cubic-bezier(.22,.61,.36,1) ' + delay + 'ms';
    io.observe(el);
  };

  document.querySelectorAll('main > section').forEach((sec, i) => {
    if (i === 0) return;
    const grids = sec.querySelectorAll('[data-stagger]');
    if (grids.length) {
      sec.querySelectorAll(':scope > div > header, :scope > div > *:not([data-stagger])').forEach((el) => prep(el, 0));
      grids.forEach((g) => Array.from(g.children).forEach((c, j) => prep(c, Math.min(j, 5) * 100)));
    } else {
      prep(sec, 0);
    }
  });
}

// Wraps a button with a spinning conic-gradient rim (see .ar-beam-wrap in index.html).
function BeamWrap({ children, style }) {
  return <span className="ar-beam-wrap" style={style}>{children}</span>;
}

Object.assign(window, { TerminalType, TerminalCursor, arInitReveal, BeamWrap });
