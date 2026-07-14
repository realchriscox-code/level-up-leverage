import { useState } from 'react';
import { ArrowRight, X, Check } from 'lucide-react';
import { BOOKING_URL } from '../data/links';

const CHIP_COLOR = 'var(--color-mint-300)';

export default function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);
  const number = String(index + 1).padStart(3, '0');

  const Icon = project.icon;

  return (
    <div style={{ perspective: 1600, height: 300 }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s cubic-bezier(0.4,0.1,0.2,1)',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            borderRadius: 'var(--radius-card-lg)',
            background: '#fff',
            border: '1px solid var(--border-default)',
            boxShadow: 'var(--shadow-sm)',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            pointerEvents: flipped ? 'none' : 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 'var(--radius-md)',
                background: CHIP_COLOR,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}
            >
              {project.image ? (
                <img src={project.image} alt="" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              ) : (
                Icon && <Icon style={{ width: 26, height: 26, color: 'var(--color-navy-700)' }} strokeWidth={1.5} />
              )}
            </div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 13,
                color: 'var(--text-tertiary)',
                letterSpacing: '0.04em',
                paddingTop: 4,
              }}
            >
              {number}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: 'var(--text-heading)', lineHeight: 1.3 }}>
              {project.title}
            </h3>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              {project.blurb}
            </p>
          </div>
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14 }}>
            <button
              type="button"
              onClick={() => setFlipped(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--color-gold-600)',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Explore This Kickstart
              <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: 'var(--radius-card-lg)',
            background: 'var(--color-navy-900)',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            pointerEvents: flipped ? 'auto' : 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
              {project.kickstartName}
            </h3>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              aria-label="Back"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, flexShrink: 0 }}
            >
              <X style={{ width: 18, height: 18, color: 'rgba(255,255,255,0.6)' }} />
            </button>
          </div>
          <div style={{ fontSize: 12, lineHeight: 1.5, color: 'rgba(255,255,255,0.7)' }}>
            Every Leverage Kickstart&trade; is built around your business and your goals. The examples below
            illustrate what we might build together.
          </div>
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px 12px',
              alignContent: 'start',
            }}
          >
            {project.checklist.map((item) => (
              <div
                key={item}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 12.5, lineHeight: 1.4, color: 'rgba(255,255,255,0.9)' }}
              >
                <Check style={{ width: 14, height: 14, color: 'var(--color-mint-300)', flexShrink: 0, marginTop: 2 }} />
                {item}
              </div>
            ))}
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              background: 'var(--color-gold-400)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 'var(--radius-btn)',
              padding: 12,
              textDecoration: 'none',
            }}
          >
            Let&apos;s Build It
            <ArrowRight style={{ width: 16, height: 16 }} />
          </a>
        </div>
      </div>
    </div>
  );
}
