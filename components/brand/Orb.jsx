import React from 'react';

export function Orb({ size = 320, intensity = 'normal', spin = true, style, ...rest }) {
  const halo = intensity === 'dramatic' ? 1.35 : intensity === 'quiet' ? 0.6 : 1;
  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        flex: `0 0 ${size}px`,
        display: 'grid',
        placeItems: 'center',
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: `-${size * 0.55 * halo}px`,
          background: 'radial-gradient(circle at 50% 50%, rgba(140,122,255,' + 0.42 * halo + ') 0%, rgba(97,77,255,' + 0.18 * halo + ') 34%, rgba(97,77,255,0) 68%)',
          pointerEvents: 'none',
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 32% 26%, #CFC7FF 0%, #8C7AFF 16%, #614DFF 38%, #2F2199 64%, #120C36 86%, #070512 100%)',
          boxShadow: 'inset -18px -28px 60px rgba(5,4,16,.85), inset 14px 18px 50px rgba(180,168,255,.35), 0 40px 120px -30px rgba(97,77,255,' + 0.7 * halo + ')',
        }}
      />
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: '50%', overflow: 'hidden' }}>
        <span
          style={{
            position: 'absolute',
            inset: '-6%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse 58% 16% at 50% 24%, rgba(254,253,255,.16) 0%, rgba(254,253,255,0) 72%)',
            filter: 'blur(6px)',
            animation: spin ? 'arium-orb-spin var(--dur-ambient) linear infinite' : 'none',
          }}
        />
      </span>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 74% 84%, rgba(150,132,255,.50) 0%, rgba(150,132,255,0) 26%)',
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 22%, rgba(254,253,255,.55) 0%, rgba(254,253,255,0) 28%)',
        }}
      />
      <style>{'@keyframes arium-orb-spin{to{transform:rotate(360deg)}}'}</style>
    </div>
  );
}
