import React from 'react';

const ariumCardPads = { none: 0, sm: 'var(--space-5)', md: 'var(--space-6)', lg: 'var(--space-8)' };

export function Card({ tone = 'default', padding = 'md', radius = 'lg', interactive = false, children, style, ...rest }) {
  const base = {
    position: 'relative',
    borderRadius: `var(--radius-${radius})`,
    padding: ariumCardPads[padding] ?? ariumCardPads.md,
    border: '1px solid var(--border-subtle)',
    background: 'var(--bg-card)',
    overflow: 'hidden',
    transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-out-soft)',
  };
  const tones = {
    default: {},
    raised: { background: 'var(--bg-raised)', boxShadow: 'var(--shadow-card)' },
    glass: { background: 'var(--ar-alpha-4)', backdropFilter: 'var(--blur-glass)', border: '1px solid var(--border-default)' },
    glow: { background: 'var(--bg-card)' },
    accent: { background: 'var(--gradient-accent)', border: '1px solid rgba(254,253,255,.14)' },
  };
  return (
    <div
      style={{ ...base, ...(tones[tone] || {}), ...style }}
      onMouseEnter={(e) => { if (interactive) { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.transform = 'var(--hover-lift)'; } }}
      onMouseLeave={(e) => { if (interactive) { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'none'; } }}
      {...rest}
    >
      {tone === 'glow' && (
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--glow-card)', pointerEvents: 'none' }} />
      )}
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
