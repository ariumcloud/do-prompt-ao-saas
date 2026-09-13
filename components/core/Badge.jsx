import React from 'react';

const ariumBadgeTones = {
  neutral: { background: 'var(--ar-alpha-4)', color: 'var(--text-secondary)', borderColor: 'var(--border-default)' },
  glass: { background: 'rgba(254,253,255,.08)', color: 'var(--text-primary)', borderColor: 'var(--border-strong)' },
  accent: { background: 'var(--accent-quiet)', color: 'var(--text-accent)', borderColor: 'var(--border-accent)' },
  solid: { background: 'var(--accent)', color: 'var(--text-on-accent)', borderColor: 'transparent' },
  positive: { background: 'rgba(46,211,167,.12)', color: 'var(--signal-positive)', borderColor: 'rgba(46,211,167,.32)' },
};

export function Badge({ tone = 'neutral', size = 'md', dot = false, icon, children, style, ...rest }) {
  const t = ariumBadgeTones[tone] || ariumBadgeTones.neutral;
  const small = size === 'sm';
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'currentColor' }} />}
      {icon}
      {children}
    </span>
  );
}
