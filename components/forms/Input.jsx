import React from 'react';

export function Input({ label, hint, trailing, size = 'md', invalid = false, style, ...rest }) {
  const h = size === 'lg' ? 52 : size === 'sm' ? 36 : 44;
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', ...style }}>
      {label && <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{label}</span>}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: h,
          padding: trailing ? '0 6px 0 16px' : '0 16px',
          background: 'var(--bg-input)',
          border: `1px solid ${invalid ? 'var(--signal-negative)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-sm)',
          transition: 'border-color var(--dur-fast) var(--ease-standard)',
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--border-accent)'; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = invalid ? 'var(--signal-negative)' : 'var(--border-default)'; }}
      >
        <input
          style={{
            flex: 1,
            minWidth: 0,
            background: 'transparent',
            border: 0,
            outline: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-core)',
            fontSize: 'var(--text-body-sm)',
          }}
          {...rest}
        />
        {trailing}
      </span>
      {hint && <span style={{ fontSize: 'var(--text-caption)', color: invalid ? 'var(--signal-negative)' : 'var(--text-faint)' }}>{hint}</span>}
    </label>
  );
}
