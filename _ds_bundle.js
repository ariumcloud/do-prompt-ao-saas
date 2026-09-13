/* @ds-bundle: {"format":4,"namespace":"AriumDesignSystem_4c6a30","components":[{"name":"Orb","sourcePath":"components/brand/Orb.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ARIUM_ICON_SRC","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/brand/Orb.jsx":"aa155e08e720","components/brand/Wordmark.jsx":"f91023f05a21","components/core/Badge.jsx":"a6802df85f46","components/core/Button.jsx":"4bd137a52bca","components/core/Card.jsx":"761d869f2c10","components/core/Icon.jsx":"51727f645f9a","components/core/IconTile.jsx":"c394b7a670c6","components/core/SectionHeading.jsx":"9a7a2b697e95","components/core/Stat.jsx":"2b1787a6d3c2","components/disclosure/Accordion.jsx":"d88b8d9a50a6","components/forms/Input.jsx":"9f903880277a","components/forms/Switch.jsx":"fe478a7ea198","components/navigation/NavBar.jsx":"96fd4d250952","ui_kits/course-landing/Audience.jsx":"4100b9de5029","ui_kits/course-landing/Closing.jsx":"cdda6a25d7ad","ui_kits/course-landing/Header.jsx":"0f1de70e933c","ui_kits/course-landing/Hero.jsx":"bff4c45e065c","ui_kits/course-landing/Modules.jsx":"1e4928b5f4b5","ui_kits/course-landing/Motion.jsx":"aaea71fb68c3","ui_kits/course-landing/Offer.jsx":"c05074f3729d","ui_kits/course-landing/Proof.jsx":"2b8eca4f7fc7","ui_kits/course-landing/TerminalFx.jsx":"0d22709a88fd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AriumDesignSystem_4c6a30 = window.AriumDesignSystem_4c6a30 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Orb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Orb({
  size = 320,
  intensity = 'normal',
  spin = true,
  style,
  ...rest
}) {
  const halo = intensity === 'dramatic' ? 1.35 : intensity === 'quiet' ? 0.6 : 1;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: `0 0 ${size}px`,
      display: 'grid',
      placeItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: `-${size * 0.55 * halo}px`,
      background: 'radial-gradient(circle at 50% 50%, rgba(140,122,255,' + 0.42 * halo + ') 0%, rgba(97,77,255,' + 0.18 * halo + ') 34%, rgba(97,77,255,0) 68%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 32% 26%, #CFC7FF 0%, #8C7AFF 16%, #614DFF 38%, #2F2199 64%, #120C36 86%, #070512 100%)',
      boxShadow: 'inset -18px -28px 60px rgba(5,4,16,.85), inset 14px 18px 50px rgba(180,168,255,.35), 0 40px 120px -30px rgba(97,77,255,' + 0.7 * halo + ')'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '-6%',
      borderRadius: '50%',
      background: 'radial-gradient(ellipse 58% 16% at 50% 24%, rgba(254,253,255,.16) 0%, rgba(254,253,255,0) 72%)',
      filter: 'blur(6px)',
      animation: spin ? 'arium-orb-spin var(--dur-ambient) linear infinite' : 'none'
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 74% 84%, rgba(150,132,255,.50) 0%, rgba(150,132,255,0) 26%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 22%, rgba(254,253,255,.55) 0%, rgba(254,253,255,0) 28%)'
    }
  }), /*#__PURE__*/React.createElement("style", null, '@keyframes arium-orb-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Orb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Orb.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = 20,
  tone = 'primary',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: size,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.04em',
      lineHeight: 1,
      color: tone === 'muted' ? 'var(--text-muted)' : 'var(--text-primary)',
      ...style
    }
  }, rest), "Do Prompt ao SaaS");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ariumBadgeTones = {
  neutral: {
    background: 'var(--ar-alpha-4)',
    color: 'var(--text-secondary)',
    borderColor: 'var(--border-default)'
  },
  glass: {
    background: 'rgba(254,253,255,.08)',
    color: 'var(--text-primary)',
    borderColor: 'var(--border-strong)'
  },
  accent: {
    background: 'var(--accent-quiet)',
    color: 'var(--text-accent)',
    borderColor: 'var(--border-accent)'
  },
  solid: {
    background: 'var(--accent)',
    color: 'var(--text-on-accent)',
    borderColor: 'transparent'
  },
  positive: {
    background: 'rgba(46,211,167,.12)',
    color: 'var(--signal-positive)',
    borderColor: 'rgba(46,211,167,.32)'
  }
};
function Badge({
  tone = 'neutral',
  size = 'md',
  dot = false,
  icon,
  children,
  style,
  ...rest
}) {
  const t = ariumBadgeTones[tone] || ariumBadgeTones.neutral;
  const small = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: small ? 5 : 7,
      height: small ? 22 : 30,
      padding: small ? '0 9px' : '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid',
      fontFamily: 'var(--font-core)',
      fontSize: small ? 'var(--text-micro)' : 'var(--text-caption)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-eyebrow)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      backdropFilter: 'var(--blur-glass)',
      ...t,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'currentColor'
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ariumButtonSizes = {
  sm: {
    height: 36,
    padding: '0 16px',
    fontSize: 13,
    gap: 6
  },
  md: {
    height: 44,
    padding: '0 22px',
    fontSize: 15,
    gap: 8
  },
  lg: {
    height: 52,
    padding: '0 28px',
    fontSize: 16,
    gap: 10
  }
};
const ariumButtonTones = {
  primary: {
    background: 'var(--gradient-accent)',
    color: 'var(--text-on-accent)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-accent)'
  },
  secondary: {
    background: 'var(--bg-inset)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)',
    boxShadow: 'var(--shadow-inset-hairline)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent',
    boxShadow: 'none'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  children,
  style,
  ...rest
}) {
  const s = ariumButtonSizes[size] || ariumButtonSizes.md;
  const tone = ariumButtonTones[variant] || ariumButtonTones.primary;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-core)',
      fontSize: s.fontSize,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '-0.01em',
      lineHeight: 1,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)',
      ...tone,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'var(--press-scale)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.12)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'none';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ariumCardPads = {
  none: 0,
  sm: 'var(--space-5)',
  md: 'var(--space-6)',
  lg: 'var(--space-8)'
};
function Card({
  tone = 'default',
  padding = 'md',
  radius = 'lg',
  interactive = false,
  children,
  style,
  ...rest
}) {
  const base = {
    position: 'relative',
    borderRadius: `var(--radius-${radius})`,
    padding: ariumCardPads[padding] ?? ariumCardPads.md,
    border: '1px solid var(--border-subtle)',
    background: 'var(--bg-card)',
    overflow: 'hidden',
    transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-out-soft)'
  };
  const tones = {
    default: {},
    raised: {
      background: 'var(--bg-raised)',
      boxShadow: 'var(--shadow-card)'
    },
    glass: {
      background: 'var(--ar-alpha-4)',
      backdropFilter: 'var(--blur-glass)',
      border: '1px solid var(--border-default)'
    },
    glow: {
      background: 'var(--bg-card)'
    },
    accent: {
      background: 'var(--gradient-accent)',
      border: '1px solid rgba(254,253,255,.14)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...(tones[tone] || {}),
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.borderColor = 'var(--border-strong)';
        e.currentTarget.style.transform = 'var(--hover-lift)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.transform = 'none';
      }
    }
  }, rest), tone === 'glow' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--glow-card)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Arium ships no icon set of its own. Lucide is the documented substitute, loaded
   once from the CDN as data and rendered inline so every glyph inherits
   currentColor and the brand's 1.5px stroke. */
const ARIUM_ICON_SRC = 'https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js';
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
  s.onload = () => ariumIconSubscribers.forEach(fn => fn());
  document.head.appendChild(s);
}
ariumEnsureIcons();
function ariumIconKey(slug) {
  return String(slug).split(/[-_\s]+/).filter(Boolean).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  const [, bump] = React.useState(0);
  React.useEffect(() => {
    if (ariumIconLib()) return undefined;
    const fn = () => bump(n => n + 1);
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
    style: {
      display: 'block',
      flex: `0 0 ${size}px`,
      ...style
    },
    ...rest
  };
  if (!Array.isArray(node)) return React.createElement('svg', svgProps);
  return React.createElement('svg', svgProps, node.map((child, i) => {
    const tag = Array.isArray(child) ? child[0] : child.tag;
    const attrs = Array.isArray(child) ? child[1] : child.attrs;
    return React.createElement(tag, {
      key: i,
      ...attrs
    });
  }));
}
Object.assign(__ds_scope, { ARIUM_ICON_SRC, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconTile({
  size = 40,
  tone = 'default',
  children,
  style,
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--ar-ink-4)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    quiet: {
      background: 'var(--accent-quiet)',
      color: 'var(--text-accent)',
      border: '1px solid var(--border-accent)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: `0 0 ${size}px`,
      borderRadius: size >= 48 ? 'var(--radius-md)' : 'var(--radius-sm)',
      ...(tones[tone] || tones.default),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  size = 'md',
  style,
  ...rest
}) {
  const sizes = {
    sm: 'var(--text-display-3)',
    md: 'var(--text-display-2)',
    lg: 'var(--text-display-1)'
  };
  let parts = [title];
  if (highlight && typeof title === 'string' && title.includes(highlight)) {
    const i = title.indexOf(highlight);
    parts = [title.slice(0, i), highlight, title.slice(i + highlight.length)];
  }
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 'var(--space-5)',
      maxWidth: align === 'center' ? 'var(--container-narrow)' : 'none',
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, rest), eyebrow, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: sizes[size] || sizes.md,
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 'var(--weight-semibold)',
      color: parts.length === 3 ? 'var(--text-secondary)' : 'var(--text-primary)',
      textWrap: 'balance'
    }
  }, parts.length === 3 ? /*#__PURE__*/React.createElement(React.Fragment, null, parts[0], /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundImage: 'linear-gradient(90deg, var(--text-primary) 0%, var(--text-accent, #A090FF) 35%, var(--text-primary) 70%, var(--text-primary) 100%)',
      backgroundSize: '220% auto',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      animation: 'ar-heading-gradient 7s linear infinite'
    }
  }, parts[1]), parts[2]) : title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 620,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, subtitle), /*#__PURE__*/React.createElement("style", null, '@keyframes ar-heading-gradient{to{background-position:-220% center}}'));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  label,
  value,
  unit,
  delta,
  trend = 'up',
  align = 'left',
  style,
  ...rest
}) {
  const positive = trend === 'up';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-eyebrow)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.03em',
      lineHeight: 1,
      color: 'var(--text-primary)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, unit), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-medium)',
      color: positive ? 'var(--signal-positive)' : 'var(--signal-negative)'
    }
  }, delta)));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      width: '100%',
      ...style
    }
  }, rest), items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--bg-card)',
        border: `1px solid ${isOpen ? 'var(--border-default)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'border-color var(--dur-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        width: '100%',
        padding: '18px 20px',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-core)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--weight-medium)',
        color: isOpen ? 'var(--text-accent)' : 'var(--text-primary)',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, item.question, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        lineHeight: 1,
        color: 'var(--text-muted)',
        flex: '0 0 auto'
      }
    }, isOpen ? '−' : '+')), isOpen && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 20px 20px',
        fontSize: 'var(--text-body-sm)',
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-muted)',
        maxWidth: 640
      }
    }, item.answer));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  trailing,
  size = 'md',
  invalid = false,
  style,
  ...rest
}) {
  const h = size === 'lg' ? 52 : size === 'sm' ? 36 : 44;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: trailing ? '0 6px 0 16px' : '0 16px',
      background: 'var(--bg-input)',
      border: `1px solid ${invalid ? 'var(--signal-negative)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--border-accent)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--signal-negative)' : 'var(--border-default)';
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-body-sm)'
    }
  }, rest)), trailing), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: invalid ? 'var(--signal-negative)' : 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'none',
      border: 0,
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      flex: '0 0 44px',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--ar-ink-4)',
      border: `1px solid ${checked ? 'transparent' : 'var(--border-default)'}`,
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: 999,
      background: 'var(--ar-chalk-0)',
      transition: 'left var(--dur-base) var(--ease-out-soft)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  brand,
  links = [],
  actions,
  activeHref,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      width: '100%',
      padding: '18px 28px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flex: '0 0 auto'
    }
  }, brand), links.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: 5,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)',
      background: 'rgba(254,253,255,.06)',
      backdropFilter: 'var(--blur-glass)'
    }
  }, links.map(l => {
    const active = l.href === activeHref;
    return /*#__PURE__*/React.createElement("a", {
      key: l.href,
      href: l.href,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 16px',
        borderRadius: 'var(--radius-pill)',
        fontSize: 'var(--text-body-sm)',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: active ? 'rgba(254,253,255,.10)' : 'transparent',
        whiteSpace: 'nowrap'
      }
    }, l.label, l.badge);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flex: '0 0 auto'
    }
  }, actions));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-landing/Audience.jsx
try { (() => {
const {
  Card,
  Badge,
  SectionHeading,
  Icon
} = window.AriumDesignSystem_4c6a30 || {};
const ariumAudienceFor = ['Você tem uma ideia parada há meses e nunca achou um dev.', 'Você já usa IA para escrever texto e quer usar para construir produto.', 'Você é freelancer ou agência e quer parar de vender hora.', 'Você quer validar um micro-SaaS antes de investir em time.'];
const ariumAudienceNot = ['Quem procura renda passiva sem trabalhar nas primeiras semanas.', 'Quem quer virar engenheiro de software — isto não é uma graduação.', 'Quem espera um template pronto para revender sem entender nada.', 'Quem não vai abrir o computador para fazer os exercícios.'];
function AudienceList({
  tone,
  title,
  items
}) {
  const positive = tone === 'for';
  return /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    radius: "xl",
    tone: positive ? 'glow' : 'default',
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: positive ? 'accent' : 'neutral'
  }, positive ? 'É para você' : 'Não é para você')), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h3)',
      marginBottom: 20
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: positive ? 'var(--signal-positive)' : 'var(--text-faint)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: positive ? 'check' : 'x',
    size: 16
  })), t))));
}
function Audience() {
  return /*#__PURE__*/React.createElement("section", {
    id: "quem",
    className: "ar-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Qualifica\xE7\xE3o"),
    title: "Antes do pre\xE7o, a pergunta honesta: isso \xE9 para voc\xEA?",
    highlight: "isso \xE9 para voc\xEA?",
    subtitle: "Prefiro que voc\xEA feche esta p\xE1gina agora a pedir reembolso daqui a uma semana."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 20,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(AudienceList, {
    tone: "for",
    title: "Feito para quem quer publicar, n\xE3o estudar.",
    items: ariumAudienceFor
  }), /*#__PURE__*/React.createElement(AudienceList, {
    tone: "not",
    title: "Deixe para depois se voc\xEA se reconhece aqui.",
    items: ariumAudienceNot
  }))));
}
window.Audience = Audience;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-landing/Audience.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-landing/Closing.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  SectionHeading,
  Accordion,
  Icon,
  Wordmark,
  Input
} = window.AriumDesignSystem_4c6a30 || {};
function Guarantee() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ar-section",
    style: {
      paddingBlock: 'clamp(48px,6vw,90px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-container"
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "raised",
    padding: "lg",
    radius: "2xl",
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 84,
      height: 84,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--accent-quiet)',
      border: '1px solid var(--border-accent)',
      color: 'var(--text-accent)',
      flex: '0 0 84px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h3)'
    }
  }, "7 dias para testar. O risco \xE9 meu."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      maxWidth: 620
    }
  }, "Assista aos m\xF3dulos, baixe o reposit\xF3rio, fa\xE7a o primeiro deploy. Se em uma semana voc\xEA achar que n\xE3o era isso, responde o e-mail de compra e eu devolvo os R$197. Sem formul\xE1rio, sem pergunta de reten\xE7\xE3o.")))));
}
const ariumFaq = [{
  question: 'Preciso saber programar?',
  answer: 'Não. O curso parte do zero em código. Você aprende a descrever o que quer, revisar o que a IA escreve e corrigir quando quebra — que é o trabalho real de quem publica software hoje.'
}, {
  question: 'Quanto tempo até ter algo no ar?',
  answer: 'O módulo 6 termina com o deploy. Dedicando cerca de 5 horas por semana, a maior parte dos alunos publica em um mês.'
}, {
  question: 'Quanto custa manter o SaaS rodando?',
  answer: 'Os planos gratuitos de Supabase e Vercel cobrem o início. O primeiro custo real aparece quando você já tem clientes pagando — e o módulo de precificação trata exatamente disso.'
}, {
  question: 'Serve para vender projeto para cliente?',
  answer: 'Sim. O bônus de contratos e proposta existe para isso. Vários alunos usam o método para entregar sistemas sob medida em vez de vender hora.'
}, {
  question: 'Funciona no Windows?',
  answer: 'Sim. Todo o stack roda no navegador e no terminal, igual no Mac e no Linux.'
}, {
  question: 'Tem certificado?',
  answer: 'Não. O que você mostra no fim é o produto no ar com um domínio, que vale mais que um PDF.'
}];
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "ar-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-container",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.85fr) minmax(0,1.15fr)',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    size: "sm",
    eyebrow: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "D\xFAvidas"),
    title: "O que as pessoas perguntam antes de comprar",
    highlight: "antes de comprar",
    subtitle: "Se a sua n\xE3o estiver aqui, responda o e-mail de contato \u2014 eu leio todas."
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: ariumFaq
  })));
}
function Closing() {
  return /*#__PURE__*/React.createElement("section", {
    id: "mentoria",
    style: {
      position: 'relative',
      paddingTop: 140,
      paddingBottom: 160,
      overflow: 'hidden',
      background: 'linear-gradient(180deg,#060607 0%,#0A0818 40%,#140E3A 78%,#241869 100%)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      bottom: -420,
      transform: 'translateX(-50%)',
      width: 1200,
      height: 1200,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 50% 50%, rgba(160,144,255,.55) 0%, rgba(97,77,255,.28) 34%, rgba(97,77,255,0) 66%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ar-container",
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "glass",
    dot: true
  }, "\xDAltimas vagas da turma 2026"), /*#__PURE__*/React.createElement(window.TerminalType, {
    as: "h2",
    lines: ['A ideia continua na sua cabeça', 'ou entra no ar este mês.'],
    style: {
      margin: 0,
      maxWidth: 900,
      fontSize: 'var(--text-display-1)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 'var(--weight-semibold)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      fontSize: 'var(--text-body-lg)',
      color: 'rgba(254,253,255,.82)',
      lineHeight: 'var(--lh-body)'
    }
  }, "R$197, acesso vital\xEDcio, 7 dias de garantia. O \xFAnico jeito de descobrir se funciona \xE9 abrir o primeiro m\xF3dulo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "#preco",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Come\xE7ar por R$197"))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-page)',
      paddingBlock: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-container",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, "Receba um aviso quando a pr\xF3xima turma abrir. Sem spam, s\xF3 o essencial."), /*#__PURE__*/React.createElement(Input, {
    placeholder: "seu@email.com",
    trailing: /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Avise-me")
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-faint)'
    }
  }, "Curso"), ['Módulos', 'Para quem é', 'Preço', 'Garantia'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#modulos",
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, l))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-faint)'
    }
  }, "Suporte"), ['Dúvidas frequentes', 'Contato', 'Política de reembolso', 'Termos de uso'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#faq",
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "ar-container",
    style: {
      marginTop: 44,
      paddingTop: 22,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Do Prompt ao SaaS. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", null, "Feito com vibe-coding.")));
}
window.Guarantee = Guarantee;
window.Faq = Faq;
window.Closing = Closing;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-landing/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-landing/Header.jsx
try { (() => {
const {
  NavBar,
  Button,
  Badge,
  Wordmark
} = window.AriumDesignSystem_4c6a30 || {};
function Header() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: solid ? 'rgba(6,6,7,.72)' : 'transparent',
      backdropFilter: solid ? 'var(--blur-glass)' : 'none',
      borderBottom: `1px solid ${solid ? 'var(--border-subtle)' : 'transparent'}`,
      transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-container",
    style: {
      paddingInline: 0
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    brand: /*#__PURE__*/React.createElement(Wordmark, {
      size: 21
    }),
    activeHref: "#modulos",
    links: [{
      label: 'Módulos',
      href: '#modulos'
    }, {
      label: 'Para quem é',
      href: '#quem'
    }, {
      label: 'Prova',
      href: '#prova'
    }, {
      label: 'Preço',
      href: '#preco'
    }, {
      label: 'Mentoria',
      href: '#mentoria',
      badge: /*#__PURE__*/React.createElement(Badge, {
        size: "sm",
        tone: "glass"
      }, "EM BREVE")
    }],
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      href: "#faq",
      className: "ar-hide-sm"
    }, "D\xFAvidas"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      href: "#preco"
    }, "Garantir vaga"))
  })));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-landing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-landing/Hero.jsx
try { (() => {
const {
  Button,
  Badge,
  Icon
} = window.AriumDesignSystem_4c6a30 || {};
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      paddingTop: 168,
      paddingBottom: 120,
      background: 'radial-gradient(110% 70% at 50% -18%, #6E5BFF 0%, #4A38C8 18%, #241A6B 36%, #0C0A1E 62%, #060607 82%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(80% 50% at 50% 0%, rgba(6,6,7,0) 40%, rgba(6,6,7,.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ar-container",
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "glass",
    dot: true
  }, "Turma 2026 \xB7 vagas abertas"), /*#__PURE__*/React.createElement(window.TerminalType, {
    as: "h1",
    lines: ['Você não precisa virar programador', 'para colocar um SaaS no ar.'],
    style: {
      margin: 0,
      maxWidth: 940,
      fontSize: 'var(--text-display-1)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-display)',
      fontWeight: 'var(--weight-semibold)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 620,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'rgba(254,253,255,.82)'
    }
  }, "Do Prompt ao SaaS \xE9 o curso que te leva da ideia ao primeiro pagamento aprovado usando IA generativa como par de programa\xE7\xE3o. Seis m\xF3dulos, um produto publicado no fim."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "#preco"
  }, "Quero acesso por R$197"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    href: "#modulos",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "list",
      size: 16
    })
  }, "Ver os 6 m\xF3dulos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      justifyContent: 'center',
      fontSize: 'var(--text-caption)',
      color: 'rgba(254,253,255,.66)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "infinity",
    size: 14
  }), "Acesso vital\xEDcio"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 14
  }), "7 dias de garantia"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh-cw",
    size: 14
  }), "Atualiza\xE7\xF5es inclu\xEDdas"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-landing/Modules.jsx
try { (() => {
const {
  Card,
  Badge,
  SectionHeading,
  IconTile,
  Icon
} = window.AriumDesignSystem_4c6a30 || {};
const ariumModules = [{
  n: '01',
  icon: 'sparkles',
  title: 'Fundamentos de vibe-coding',
  body: 'Como conversar com a IA para obter código que funciona: contexto, prompts de arquitetura, revisão e correção de erro sem travar.',
  out: 'Ambiente montado e o primeiro app rodando local.'
}, {
  n: '02',
  icon: 'target',
  title: 'Ideia e escopo do SaaS',
  body: 'Escolher um problema pequeno o bastante para caber em um mês e caro o bastante para alguém pagar. Recorte de escopo e definição do MVP.',
  out: 'Escopo de uma página com telas e funcionalidades.'
}, {
  n: '03',
  icon: 'database',
  title: 'Base técnica',
  body: 'Next.js para a aplicação, Supabase para banco e autenticação, Vercel para hospedagem. Como as três peças se encaixam e por que essa escolha.',
  out: 'Projeto com login funcionando e banco conectado.'
}, {
  n: '04',
  icon: 'layout-dashboard',
  title: 'Construindo as funcionalidades',
  body: 'Do CRUD ao painel do usuário: modelagem de dados, telas, estados vazios e as permissões que separam um cliente do outro.',
  out: 'Produto navegável com dados reais.'
}, {
  n: '05',
  icon: 'credit-card',
  title: 'Pagamentos com Mercado Pago',
  body: 'Checkout, assinatura recorrente, webhook de confirmação e o que fazer quando o pagamento falha. É aqui que o projeto vira negócio.',
  out: 'Primeiro pagamento de teste aprovado ponta a ponta.'
}, {
  n: '06',
  icon: 'rocket',
  title: 'Publicando no ar',
  body: 'Domínio próprio, variáveis de ambiente, checklist de segurança e o deploy. Depois: como acompanhar erros e receber os primeiros usuários.',
  out: 'SaaS público, no seu domínio, aceitando pagamento.'
}];
function Modules() {
  return /*#__PURE__*/React.createElement("section", {
    id: "modulos",
    className: "ar-section",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--glow-soft)',
      opacity: .5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ar-container",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: /*#__PURE__*/React.createElement(Badge, {
      tone: "glass"
    }, "Conte\xFAdo"),
    title: "Seis m\xF3dulos que terminam com algo publicado",
    highlight: "terminam com algo publicado",
    subtitle: "Nenhum m\xF3dulo acaba em teoria. Cada um fecha com uma entrega que voc\xEA consegue abrir no navegador."
  }), /*#__PURE__*/React.createElement("div", {
    "data-stagger": true,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))',
      gap: 18,
      marginTop: 56
    }
  }, ariumModules.map((m, i) => /*#__PURE__*/React.createElement(Card, {
    key: m.n,
    interactive: true,
    padding: "lg",
    radius: "xl",
    tone: i === 4 ? 'glow' : 'default',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    tone: i === 4 ? 'accent' : 'default'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-faint)',
      letterSpacing: '-0.03em'
    }
  }, m.n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h4)'
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, m.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 16,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "corner-down-right",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, m.out)))))));
}
window.Modules = Modules;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-landing/Modules.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-landing/Motion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Arium — motion helpers for the course landing page.
   Terminal caret, scroll-driven typing, and IntersectionObserver reveals.
   Kept local to the kit: passive listeners, one rAF per frame, no filters. */

const ariumReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------------- Caret --- */

function Caret({
  height = '1em',
  width = 2,
  state = 'blink',
  style
}) {
  const walking = state === 'walk';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width,
      height,
      verticalAlign: 'text-bottom',
      marginLeft: '.12em',
      marginBottom: '-.06em',
      background: 'var(--ar-violet-400)',
      boxShadow: '0 0 12px rgba(140,122,255,.65)',
      animation: walking || ariumReduced ? 'none' : 'arium-caret-blink 1.06s steps(1) infinite',
      ...style
    }
  });
}

/* ----------------------------------------------------- scroll progress --- */

function ariumUseScrollProgress(ref, opts) {
  const {
    driver = 'viewport',
    floor = 0,
    span = 260,
    startVh = 0.9,
    endVh = 0.45
  } = opts || {};
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
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll, {
      passive: true
    });
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

function ScrollType({
  lines = [],
  driver = 'viewport',
  floor = 0,
  span = 260,
  startVh = 0.9,
  endVh = 0.45,
  caretWidth = 3,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const progress = ariumUseScrollProgress(ref, {
    driver,
    floor,
    span,
    startVh,
    endVh
  });
  const walking = ariumUseWalking(progress);
  const total = lines.reduce((n, l) => n + l.length, 0);
  const shown = Math.round(progress * total);
  let consumed = 0;
  const rendered = lines.map((line, i) => {
    const before = consumed;
    consumed += line.length;
    const cut = Math.min(line.length, Math.max(0, shown - before));
    const isCaretLine = shown >= before && shown <= consumed && (cut > 0 || i === 0 || shown === before);
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("span", null, line.slice(0, cut)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'transparent'
      }
    }, line.slice(cut)), isCaretLine && /*#__PURE__*/React.createElement(Caret, {
      width: caretWidth,
      state: walking ? 'walk' : 'blink',
      style: {
        marginLeft: cut ? '.1em' : 0
      }
    }));
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: style
  }, rest), rendered);
}

/* ---------------------------------------------------------------- Reveal --- */

function Reveal({
  as = 'div',
  index = 0,
  stagger = 70,
  y = 18,
  once = true,
  children,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(ariumReduced);
  React.useEffect(() => {
    if (ariumReduced || seen) return undefined;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setSeen(true);
          if (once) io.unobserve(e.target);
        } else if (!once) {
          setSeen(false);
        }
      });
    }, {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12
    });
    io.observe(el);
    return () => io.disconnect();
  }, [once, seen]);
  return React.createElement(as, {
    ref,
    style: {
      opacity: seen ? 1 : 0,
      transform: seen ? 'none' : `translate3d(0,${y}px,0)`,
      transition: `opacity 560ms var(--ease-out-soft) ${index * stagger}ms, transform 560ms var(--ease-out-soft) ${index * stagger}ms`,
      willChange: seen ? 'auto' : 'opacity, transform',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(window, {
  Caret,
  ScrollType,
  Reveal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-landing/Motion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-landing/Offer.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  SectionHeading,
  Icon,
  Wordmark
} = window.AriumDesignSystem_4c6a30 || {};
const ariumIncluded = ['6 módulos gravados, do primeiro prompt ao deploy', 'Repositório-base do projeto do curso', 'Biblioteca de prompts de arquitetura e correção', 'Checklist de lançamento e de segurança', 'Comunidade no Discord com revisão de projeto', 'Acesso vitalício e todas as atualizações'];
const ariumBonus = [{
  icon: 'file-text',
  t: 'Bônus 1 — Kit de contratos',
  d: 'Proposta e contrato para vender o SaaS como projeto fechado.'
}, {
  icon: 'wallet',
  t: 'Bônus 2 — Precificação',
  d: 'Planilha de planos, custos de infra e ponto de equilíbrio.'
}];
function Offer() {
  return /*#__PURE__*/React.createElement("section", {
    id: "preco",
    className: "ar-section",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--glow-soft)',
      opacity: .7,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ar-container",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: /*#__PURE__*/React.createElement(Badge, {
      tone: "glass"
    }, "Oferta"),
    title: /*#__PURE__*/React.createElement(window.TerminalType, {
      lines: ['Um pagamento. O curso inteiro. Para sempre.'],
      style: {
        display: 'block'
      }
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 20,
      marginTop: 56,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    radius: "xl",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h3)'
    }
  }, "O que est\xE1 incluso"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, ariumIncluded.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--signal-positive)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  })), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 20,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ariumBonus.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.t,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)'
    }
  }, b.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, b.d)))))), /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    padding: "lg",
    radius: "xl",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      boxShadow: 'var(--shadow-accent-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(90% 70% at 20% 0%, rgba(254,253,255,.30) 0%, rgba(254,253,255,0) 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 18
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "glass",
    size: "sm"
  }, "ACESSO IMEDIATO")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: 'rgba(254,253,255,.72)'
    }
  }, "R$"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 76,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-0.045em',
      lineHeight: .9
    }
  }, "197"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'rgba(254,253,255,.72)'
    }
  }, "\xE0 vista")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'rgba(254,253,255,.86)'
    }
  }, "ou 12\xD7 de R$19,90 no cart\xE3o. Sem mensalidade, sem upsell obrigat\xF3rio, sem curso avan\xE7ado escondido."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    fullWidth: true,
    style: {
      background: 'var(--ar-chalk-0)',
      color: 'var(--ar-ink-0)',
      border: '1px solid transparent',
      boxShadow: 'none',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Comprar agora"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 'var(--text-caption)',
      color: 'rgba(254,253,255,.78)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14
  }), "Pagamento seguro via Mercado Pago"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14
  }), "Acesso liberado em minutos"))))));
}
window.Offer = Offer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-landing/Offer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-landing/Proof.jsx
try { (() => {
const {
  Card,
  Badge,
  SectionHeading,
  Stat,
  Icon
} = window.AriumDesignSystem_4c6a30 || {};
function Proof() {
  return /*#__PURE__*/React.createElement("section", {
    id: "prova",
    className: "ar-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ar-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Autoridade"),
    title: "Eu n\xE3o ensino o que li. Ensino o que est\xE1 rodando.",
    highlight: "o que est\xE1 rodando"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)',
      gap: 20,
      marginTop: 48,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    radius: "xl",
    tone: "raised",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, "cabin \xB7 em produ\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, "O cabin \xE9 um SaaS multi-tenant que eu constru\xED com o mesmo m\xE9todo deste curso: IA escrevendo o c\xF3digo, eu dirigindo as decis\xF5es. Hoje ele atende clientes pagantes, com login, cobran\xE7a recorrente e dados isolados por conta."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, "Cada decis\xE3o que voc\xEA vai ver nos m\xF3dulos foi tomada duas vezes: uma dentro do cabin, outra na aula."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Contas ativas",
    value: "Multi-tenant"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Cobran\xE7a",
    value: "Recorrente"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Stack",
    value: "Next \xB7 Supabase"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    radius: "xl",
    tone: "glow",
    style: {
      display: 'grid',
      placeItems: 'center',
      minHeight: 320,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [{
    icon: 'users',
    k: 'Clientes reais',
    v: 'contas separadas, dados isolados'
  }, {
    icon: 'credit-card',
    k: 'Mercado Pago',
    v: 'assinatura + webhook em produção'
  }, {
    icon: 'shield-check',
    k: 'Auth e permissões',
    v: 'Supabase RLS por tenant'
  }, {
    icon: 'globe',
    k: 'Deploy',
    v: 'domínio próprio na Vercel'
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--ar-alpha-4)',
      border: '1px solid var(--border-subtle)',
      backdropFilter: 'var(--blur-glass)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)'
    }
  }, r.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, r.v)))))))));
}
window.Proof = Proof;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-landing/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-landing/TerminalFx.jsx
try { (() => {
// Terminal cursor + scroll-driven typing + scroll reveal. Shared by the landing sections.
const arReduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const arScrollSubs = new Set();
let arTicking = false;
function arOnScroll() {
  if (arTicking) return;
  arTicking = true;
  requestAnimationFrame(() => {
    arTicking = false;
    arScrollSubs.forEach(f => f());
  });
}
window.addEventListener('scroll', arOnScroll, {
  passive: true
});
window.addEventListener('resize', arOnScroll, {
  passive: true
});
function TerminalCursor({
  active,
  size = '0.95em'
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: '0.07em',
      minWidth: 2,
      height: size,
      marginLeft: '0.08em',
      verticalAlign: '-0.08em',
      background: 'var(--text-accent, #A090FF)',
      boxShadow: '0 0 10px rgba(160,144,255,.75)',
      animation: active ? 'none' : 'ar-blink 1.05s step-end infinite'
    }
  });
}

// mode="mount": types once on mount (hero, above the fold).
// mode="band": reveal driven purely by scroll position, latched so it never un-types.
function TerminalType({
  lines,
  mode = 'band',
  style,
  as: Tag = 'span'
}) {
  const ref = React.useRef(null);
  const [p, setP] = React.useState(arReduced ? 1 : 0);
  const [typing, setTyping] = React.useState(false);
  const latch = React.useRef(0);
  const timer = React.useRef(null);
  const bump = React.useCallback(next => {
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
      const step = t => {
        if (!t0) t0 = t;
        const next = Math.min(1, (t - t0) / 1400);
        bump(next);
        if (next < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timer.current);
      };
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
    return () => {
      arScrollSubs.delete(read);
      clearTimeout(timer.current);
    };
  }, [mode, bump]);
  const total = lines.reduce((n, l) => n + l.length, 0);
  const shown = Math.round(p * total);
  let left = shown;
  const typed = lines.map(l => {
    const s = l.slice(0, Math.max(0, left));
    left -= l.length;
    return s;
  });
  const at = typed.findIndex((s, i) => s.length < lines[i].length);
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    style: {
      position: 'relative',
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      visibility: 'hidden'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i ? /*#__PURE__*/React.createElement("br", null) : null, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    }
  }, typed.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i ? /*#__PURE__*/React.createElement("br", null) : null, l, (at === -1 ? i === lines.length - 1 : i === at) ? /*#__PURE__*/React.createElement(TerminalCursor, {
    active: typing
  }) : null))));
}
function arInitReveal() {
  if (arReduced || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.style.opacity = '1';
      e.target.style.transform = 'none';
      io.unobserve(e.target);
    });
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.06
  });
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
      sec.querySelectorAll(':scope > div > header, :scope > div > *:not([data-stagger])').forEach(el => prep(el, 0));
      grids.forEach(g => Array.from(g.children).forEach((c, j) => prep(c, Math.min(j, 5) * 100)));
    } else {
      prep(sec, 0);
    }
  });
}
Object.assign(window, {
  TerminalType,
  TerminalCursor,
  arInitReveal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-landing/TerminalFx.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Orb = __ds_scope.Orb;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ARIUM_ICON_SRC = __ds_scope.ARIUM_ICON_SRC;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
