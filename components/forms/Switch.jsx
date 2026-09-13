import React from 'react';

export function Switch({ checked = false, onChange, label, disabled = false, style, ...rest }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          width: 44,
          height: 26,
          flex: '0 0 44px',
          borderRadius: 'var(--radius-pill)',
          background: checked ? 'var(--accent)' : 'var(--ar-ink-4)',
          border: `1px solid ${checked ? 'transparent' : 'var(--border-default)'}`,
          position: 'relative',
          transition: 'background var(--dur-base) var(--ease-standard)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 3,
            left: checked ? 21 : 3,
            width: 18,
            height: 18,
            borderRadius: 999,
            background: 'var(--ar-chalk-0)',
            transition: 'left var(--dur-base) var(--ease-out-soft)',
          }}
        />
      </span>
      {label}
    </button>
  );
}
