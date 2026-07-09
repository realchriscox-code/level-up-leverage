import { useState } from 'react';

const sizeMap = {
  sm: { padding: '6px 12px', fontSize: '0.8125rem', gap: '5px' },
  md: { padding: '10px 16px', fontSize: '0.875rem', gap: '6px' },
  lg: { padding: '12px 24px', fontSize: '1rem', gap: '8px' },
};

const variantMap = {
  primary: (hovered) => ({
    background: hovered ? 'var(--color-navy-800)' : 'var(--color-navy-900)',
    color: '#ffffff',
    border: '1px solid transparent',
    boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-xs)',
  }),
  accent: (hovered) => ({
    background: hovered ? 'var(--color-gold-500)' : 'var(--color-gold-400)',
    color: '#ffffff',
    border: '1px solid transparent',
    boxShadow: hovered ? 'var(--shadow-gold)' : 'none',
  }),
  mint: (hovered) => ({
    background: hovered ? 'var(--color-mint-400)' : 'var(--color-mint-300)',
    color: 'var(--color-navy-700)',
    border: '1px solid transparent',
    boxShadow: hovered ? 'var(--shadow-mint)' : 'none',
  }),
  secondary: (hovered) => ({
    background: hovered ? 'var(--color-slate-50)' : 'var(--surface-base)',
    color: 'var(--color-navy-800)',
    border: '1px solid var(--color-slate-300)',
    boxShadow: 'var(--shadow-xs)',
  }),
  ghost: (hovered) => ({
    background: hovered ? 'var(--color-slate-100)' : 'transparent',
    color: 'var(--color-slate-700)',
    border: '1px solid transparent',
    boxShadow: 'none',
  }),
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  type = 'button',
  style,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const s = sizeMap[size] || sizeMap.md;
  const v = (variantMap[variant] || variantMap.primary)(hovered);

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: s.fontSize,
        lineHeight: '1.25rem',
        padding: s.padding,
        borderRadius: 'var(--radius-btn)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        outline: 'none',
        transform: pressed ? 'scale(0.97)' : 'scale(1)',
        transition:
          'background-color 180ms cubic-bezier(0,0,0.2,1), box-shadow 180ms cubic-bezier(0,0,0.2,1), transform 100ms cubic-bezier(0,0,0.2,1)',
        ...v,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
