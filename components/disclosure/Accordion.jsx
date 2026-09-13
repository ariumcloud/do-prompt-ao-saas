import React from 'react';

export function Accordion({ items = [], defaultOpen = 0, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', ...style }} {...rest}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{
              background: 'var(--bg-card)',
              border: `1px solid ${isOpen ? 'var(--border-default)' : 'var(--border-subtle)'}`,
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              transition: 'border-color var(--dur-base) var(--ease-standard)',
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
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
                transition: 'color var(--dur-fast) var(--ease-standard)',
              }}
            >
              {item.question}
              <span style={{ fontSize: 18, lineHeight: 1, color: 'var(--text-muted)', flex: '0 0 auto' }}>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <p style={{ margin: 0, padding: '0 20px 20px', fontSize: 'var(--text-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)', maxWidth: 640 }}>
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
