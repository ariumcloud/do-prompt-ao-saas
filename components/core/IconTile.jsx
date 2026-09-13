import React from 'react';

export function IconTile({ size = 40, tone = 'default', children, style, ...rest }) {
  const tones = {
    default: { background: 'var(--ar-ink-4)', color: 'var(--text-primary)', border: '1px solid var(--border-default)' },
    accent: { background: 'var(--accent)', color: 'var(--text-on-accent)', border: '1px solid transparent' },
    quiet: { background: 'var(--accent-quiet)', color: 'var(--text-accent)', border: '1px solid var(--border-accent)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flex: `0 0 ${size}px`,
        borderRadius: size >= 48 ? 'var(--radius-md)' : 'var(--radius-sm)',
        ...(tones[tone] || tones.default),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
