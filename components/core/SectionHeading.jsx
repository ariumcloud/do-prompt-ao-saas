import React from 'react';

export function SectionHeading({ eyebrow, title, highlight, subtitle, align = 'center', size = 'md', style, ...rest }) {
  const sizes = {
    sm: 'var(--text-display-3)',
    md: 'var(--text-display-2)',
    lg: 'var(--text-display-1)',
  };
  let parts = [title];
  if (highlight && typeof title === 'string' && title.includes(highlight)) {
    const i = title.indexOf(highlight);
    parts = [title.slice(0, i), highlight, title.slice(i + highlight.length)];
  }
  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        gap: 'var(--space-5)',
        maxWidth: align === 'center' ? 'var(--container-narrow)' : 'none',
        marginInline: align === 'center' ? 'auto' : 0,
        ...style,
      }}
      {...rest}
    >
      {eyebrow}
      <h2
        style={{
          margin: 0,
          fontSize: sizes[size] || sizes.md,
          lineHeight: 'var(--lh-display)',
          letterSpacing: 'var(--tracking-display)',
          fontWeight: 'var(--weight-semibold)',
          color: parts.length === 3 ? 'var(--text-secondary)' : 'var(--text-primary)',
          textWrap: 'balance',
        }}
      >
        {parts.length === 3 ? (
          <>
            {parts[0]}
            <span style={{ color: 'var(--text-primary)' }}>{parts[1]}</span>
            {parts[2]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p style={{ margin: 0, maxWidth: 620, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
