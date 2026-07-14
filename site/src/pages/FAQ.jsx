import { useState } from 'react';
import { Plus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { faqs } from '../data/faqs';
import { BOOKING_URL } from '../data/links';

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          padding: '24px 4px',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-heading)' }}>{item.q}</span>
        <Plus
          style={{
            width: 20,
            height: 20,
            color: 'var(--color-mint-700)',
            flexShrink: 0,
            transition: 'transform 180ms ease-out',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      {open && (
        <p style={{ margin: '0 0 24px', padding: '0 4px', fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: 680 }}>
          {item.a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      <Header activePage="faq" />

      <div
        style={{
          position: 'relative',
          backgroundImage: "url('/assets/faq-hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '72px 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(32,54,84,0.88) 0%, rgba(32,54,84,0.82) 40%, rgba(32,54,84,0.94) 100%)',
          }}
        />
        <div className="lul-wrap" style={{ position: 'relative', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.12em',
              color: 'var(--color-mint-300)',
              textTransform: 'uppercase',
              border: '1px solid rgba(168,221,216,0.35)',
              borderRadius: 9999,
              padding: '5px 14px',
              marginBottom: 20,
            }}
          >
            Frequently asked questions
          </span>
          <h1 style={{ fontSize: 44, lineHeight: 1.15, fontWeight: 800, color: '#fff', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Answers before you get started.
          </h1>
          <p style={{ maxWidth: 560, margin: '0 auto', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
            If you don&apos;t see your question here, ask us directly on a Discover call.
          </p>
        </div>
      </div>

      <div style={{ padding: '80px 0', background: '#fff' }}>
        <div className="lul-wrap" style={{ maxWidth: 800 }}>
          {faqs.map((item) => (
            <FAQItem key={item.q} item={item} />
          ))}
        </div>
      </div>

      <div style={{ padding: '64px 0', background: 'var(--color-navy-700)', textAlign: 'center' }}>
        <div className="lul-wrap">
          <h2 style={{ fontSize: 30, fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>Still have questions?</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: '0 0 26px' }}>
            Book a Discover session and ask us directly. No pressure, no pitch, just clarity.
          </p>
          <Button href={BOOKING_URL} variant="accent" size="lg" style={{ height: 48 }}>
            Book a Discover session
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
