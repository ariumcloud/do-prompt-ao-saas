import React from 'react';

export function NavBar({ brand, links = [], actions, activeHref, style, ...rest }) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        width: '100%',
        padding: '18px 28px',
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '0 0 auto' }}>{brand}</div>
      {links.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            padding: 5,
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-default)',
            background: 'rgba(254,253,255,.06)',
            backdropFilter: 'var(--blur-glass)',
          }}
        >
          {links.map((l) => {
            const active = l.href === activeHref;
            return (
              <a
                key={l.href}
                href={l.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: 'var(--text-body-sm)',
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: active ? 'rgba(254,253,255,.10)' : 'transparent',
                  whiteSpace: 'nowrap',
                }}
              >
                {l.label}
                {l.badge}
              </a>
            );
          })}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '0 0 auto' }}>{actions}</div>
    </nav>
  );
}
