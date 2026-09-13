import React from 'react';

const ariumButtonSizes = {
  sm: { height: 36, padding: '0 16px', fontSize: 13, gap: 6 },
  md: { height: 44, padding: '0 22px', fontSize: 15, gap: 8 },
  lg: { height: 52, padding: '0 28px', fontSize: 16, gap: 10 },
};

const ariumButtonTones = {
  primary: {
    background: 'var(--gradient-accent)',
    color: 'var(--text-on-accent)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-accent)',
  },
  secondary: {
    background: 'var(--bg-inset)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)',
    boxShadow: 'var(--shadow-inset-hairline)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)',
    boxShadow: 'none',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent',
    boxShadow: 'none',
  },
};

export function Button({
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
  return (
    <Tag
      href={href}
      disabled={Tag === 'button' ? disabled : undefined}
      style={{
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
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'var(--press-scale)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(1.12)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
