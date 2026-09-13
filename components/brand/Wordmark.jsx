import React from 'react';

export function Wordmark({ size = 20, tone = 'primary', style, ...rest }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-core)',
        fontSize: size,
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '-0.04em',
        lineHeight: 1,
        color: tone === 'muted' ? 'var(--text-muted)' : 'var(--text-primary)',
        ...style,
      }}
      {...rest}
    >
      Do Prompt ao SaaS
    </span>
  );
}
