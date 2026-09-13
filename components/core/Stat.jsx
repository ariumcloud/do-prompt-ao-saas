import React from 'react';

export function Stat({ label, value, unit, delta, trend = 'up', align = 'left', style, ...rest }) {
  const positive = trend === 'up';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: align === 'center' ? 'center' : 'flex-start', ...style }} {...rest}>
      {label && (
        <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', letterSpacing: 'var(--tracking-eyebrow)' }}>{label}</span>
      )}
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontSize: 28, fontWeight: 'var(--weight-semibold)', letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--text-primary)' }}>{value}</span>
        {unit && <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{unit}</span>}
        {delta && (
          <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-medium)', color: positive ? 'var(--signal-positive)' : 'var(--signal-negative)' }}>
            {delta}
          </span>
        )}
      </span>
    </div>
  );
}
