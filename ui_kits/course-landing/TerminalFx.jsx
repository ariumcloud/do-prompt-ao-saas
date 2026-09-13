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

// A heading whose letters sweep from accent-violet to their resting color,
// staggered left to right, triggered once by IntersectionObserver (not a
// mount timer). Keeps SectionHeading's own two-tone highlight split.
function ColorSweepHeading({ text, highlight }) {
  const ref = React.useRef(null);
  const [triggered, setTriggered] = React.useState(arReduced);

  React.useEffect(() => {
    if (arReduced || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTriggered(true);
          io.disconnect();
        }
      });
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  let parts = [text];
  if (highlight && text.includes(highlight)) {
    const i = text.indexOf(highlight);
    parts = [text.slice(0, i), highlight, text.slice(i + highlight.length)];
  }
  const isTwoTone = parts.length === 3;
  let charIndex = 0;

  const renderChars = (str, finalColor) => str.split('').map((ch) => {
    const idx = charIndex++;
    return (
      <span
        key={idx}
        style={{
          display: 'inline-block',
          color: triggered ? finalColor : 'var(--text-accent, #A090FF)',
          transition: `color .5s ease ${idx * 16}ms`,
        }}
      >
        {ch === ' ' ? ' ' : ch}
      </span>
    );
  });

  return (
    <span ref={ref}>
      {isTwoTone ? (
        <>
          {renderChars(parts[0], 'var(--text-secondary)')}
          {renderChars(parts[1], 'var(--text-primary)')}
          {renderChars(parts[2], 'var(--text-secondary)')}
        </>
      ) : (
        renderChars(text, 'var(--text-primary)')
      )}
    </span>
  );
}

// Wraps a button with a spinning conic-gradient rim (see .ar-beam-wrap in index.html).
function BeamWrap({ children, style }) {
  return <span className="ar-beam-wrap" style={style}>{children}</span>;
}

// Card chrome styled like an editor tab — window dots + filename — so a card
// reads as a small IDE window instead of a generic content box. `variant`
// swaps the chrome for light-on-dark-violet when the card itself is an
// accent-toned (violet gradient) surface; `highlight` lights up the small
// dot beside the filename for a card that should stand out from its peers.
function WindowTitlebar({ file, variant = 'default', highlight = false }) {
  const accent = variant === 'accent';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '10px 16px',
        borderBottom: accent ? '1px solid rgba(254,253,255,.16)' : '1px solid var(--border-subtle)',
        background: accent ? 'rgba(254,253,255,.06)' : 'rgba(254,253,255,.02)',
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: accent ? 'rgba(254,253,255,.35)' : 'rgba(254,253,255,.16)' }} />
        ))}
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, color: accent ? 'rgba(254,253,255,.75)' : 'var(--text-faint)', letterSpacing: '-0.01em' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: highlight ? (accent ? '#FEFDFF' : 'var(--text-accent)') : (accent ? 'rgba(254,253,255,.35)' : 'var(--text-faint)'), flex: '0 0 auto' }} />
        {file}
      </span>
    </div>
  );
}

// Traveling light along a CSS grid's real seams — reads the browser's own
// resolved gridTemplateColumns/Rows (not the auto-fit/1fr source values) so
// divider positions stay correct across breakpoints without reimplementing
// grid math. A ResizeObserver re-measures when the column count changes.
function GridBeamOverlay({ gridRef }) {
  const [lines, setLines] = React.useState({ v: [], h: [], w: 0, ht: 0 });

  React.useEffect(() => {
    if (arReduced) return;
    const measure = () => {
      const grid = gridRef.current;
      if (!grid) return;
      const cs = getComputedStyle(grid);
      const colGap = parseFloat(cs.columnGap) || 0;
      const rowGap = parseFloat(cs.rowGap) || 0;
      const cols = cs.gridTemplateColumns.split(' ').map(parseFloat).filter((n) => !isNaN(n));
      const rows = cs.gridTemplateRows.split(' ').map(parseFloat).filter((n) => !isNaN(n));

      const v = [];
      let x = 0;
      cols.forEach((w, i) => {
        x += w;
        if (i < cols.length - 1) { v.push(x + colGap / 2); x += colGap; }
      });
      const h = [];
      let y = 0;
      rows.forEach((rh, i) => {
        y += rh;
        if (i < rows.length - 1) { h.push(y + rowGap / 2); y += rowGap; }
      });
      setLines({ v, h, w: grid.offsetWidth, ht: grid.offsetHeight });
    };

    measure();
    const ro = ('ResizeObserver' in window) ? new ResizeObserver(measure) : null;
    if (ro && gridRef.current) ro.observe(gridRef.current);
    window.addEventListener('resize', measure);
    return () => { if (ro) ro.disconnect(); window.removeEventListener('resize', measure); };
  }, [gridRef]);

  if (arReduced || (!lines.v.length && !lines.h.length)) return null;

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {lines.v.map((x, i) => (
        <span
          key={'v' + i}
          style={{
            position: 'absolute',
            left: x,
            top: 0,
            width: 1,
            height: lines.ht,
            backgroundImage: 'linear-gradient(180deg, transparent 0%, var(--text-accent, #A090FF) 46%, rgba(254,253,255,.9) 50%, var(--text-accent, #A090FF) 54%, transparent 100%)',
            backgroundSize: '100% 400%',
            backgroundPosition: '0% 0%',
            animation: 'ar-grid-beam-v 3.2s linear infinite',
            animationDelay: `${i * 0.6}s`,
            opacity: 0.7,
          }}
        />
      ))}
      {lines.h.map((y, i) => (
        <span
          key={'h' + i}
          style={{
            position: 'absolute',
            top: y,
            left: 0,
            height: 1,
            width: lines.w,
            backgroundImage: 'linear-gradient(90deg, transparent 0%, var(--text-accent, #A090FF) 46%, rgba(254,253,255,.9) 50%, var(--text-accent, #A090FF) 54%, transparent 100%)',
            backgroundSize: '400% 100%',
            backgroundPosition: '0% 0%',
            animation: 'ar-grid-beam-h 3.2s linear infinite',
            animationDelay: `${i * 0.6 + 0.3}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}

// Ambient rows of hex-like text behind sections about trust/security
// (encryption, guarantees), not meant to be read. Every row repeats the same
// generated string, so the same characters land in the same column on every
// line; a handful of columns glow with a delay proportional to their column
// index, so the highlight sweeps left-to-right in lockstep across every row
// at once, instead of flickering independently at random.
function CodePulseBackground({ rows = 10 }) {
  const lineRef = React.useRef(null);
  if (!lineRef.current) {
    const chars = '0123456789abcdefABCDEF';
    const randChunk = (len) => Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    let s = '';
    while (s.length < 90) s += randChunk(4 + Math.floor(Math.random() * 8)) + '  :  ';
    lineRef.current = s.slice(0, 90).split('').map((ch, j) => ({ ch, bright: j % 11 === 3 }));
  }
  const line = lineRef.current;

  if (arReduced) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
      }}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} style={{ whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '.03em', color: 'rgba(160,144,255,.14)' }}>
          {Array.from({ length: 2 }).map((__, rep) => (
            <React.Fragment key={rep}>
              {line.map((c, j) => (
                c.bright ? (
                  <span key={j} style={{ color: 'rgba(217,214,255,.9)', animation: `ar-code-pulse 3.2s ease-in-out ${j * 0.09}s infinite` }}>{c.ch}</span>
                ) : c.ch
              ))}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { TerminalType, TerminalCursor, arInitReveal, BeamWrap, ColorSweepHeading, GridBeamOverlay, WindowTitlebar, CodePulseBackground });
