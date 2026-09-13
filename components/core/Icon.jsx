import React from 'react';

/* Arium ships no icon set of its own. Lucide is the documented substitute, loaded
   once from the CDN as data and rendered inline so every glyph inherits
   currentColor and the brand's 1.5px stroke. */
export const ARIUM_ICON_SRC = 'https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js';

const ariumIconSubscribers = new Set();
let ariumIconLoading = false;

function ariumIconLib() {
  if (typeof window === 'undefined') return null;
  const l = window.lucide;
  if (l && (l.icons || l.Check)) return l.icons || l;
  return null;
}

function ariumEnsureIcons() {
  if (typeof document === 'undefined' || ariumIconLib() || ariumIconLoading) return;
  ariumIconLoading = true;
  const s = document.createElement('script');
  s.src = ARIUM_ICON_SRC;
  s.crossOrigin = 'anonymous';
  s.onload = () => ariumIconSubscribers.forEach((fn) => fn());
  document.head.appendChild(s);
}

ariumEnsureIcons();

function ariumIconKey(slug) {
  return String(slug)
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

export function Icon({ name, size = 20, strokeWidth = 1.5, style, ...rest }) {
  const [, bump] = React.useState(0);
  React.useEffect(() => {
    if (ariumIconLib()) return undefined;
    const fn = () => bump((n) => n + 1);
    ariumIconSubscribers.add(fn);
    ariumEnsureIcons();
    return () => ariumIconSubscribers.delete(fn);
  }, []);

  const lib = ariumIconLib();
  const node = lib ? lib[ariumIconKey(name)] : null;
  const svgProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
    focusable: 'false',
    style: { display: 'block', flex: `0 0 ${size}px`, ...style },
    ...rest,
  };
  if (!Array.isArray(node)) return React.createElement('svg', svgProps);
  return React.createElement(
    'svg',
    svgProps,
    node.map((child, i) => {
      const tag = Array.isArray(child) ? child[0] : child.tag;
      const attrs = Array.isArray(child) ? child[1] : child.attrs;
      return React.createElement(tag, { key: i, ...attrs });
    })
  );
}
