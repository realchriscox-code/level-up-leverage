import { CircleCheck, ClipboardList } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { QUESTIONNAIRE_URL } from '../data/links';

export default function DiscoverThankYou() {
  return (
    <div>
      <Header />

      <div className="lul-dotgrid" style={{ backgroundColor: 'var(--color-navy-900)', padding: '80px 0' }}>
        <div className="lul-wrap" style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              margin: '0 auto 24px',
              borderRadius: 9999,
              background: 'rgba(168,221,216,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircleCheck style={{ width: 32, height: 32, color: 'var(--color-mint-300)' }} />
          </div>
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
            Discover session booked
          </span>
          <h1 style={{ fontSize: 44, lineHeight: 1.15, fontWeight: 800, color: '#fff', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            You&apos;re all set. Thanks for booking!
          </h1>
          <p style={{ maxWidth: 560, margin: '0 auto', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
            Check your inbox for a calendar invite with the call details. We&apos;re looking forward to it.
          </p>
        </div>
      </div>

      <div style={{ padding: '80px 0', background: '#fff' }}>
        <div className="lul-wrap" style={{ maxWidth: 720, textAlign: 'center' }}>
          <div
            style={{
              width: 56,
              height: 56,
              margin: '0 auto 20px',
              borderRadius: 9999,
              background: 'var(--color-mint-100)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ClipboardList style={{ width: 26, height: 26, color: 'var(--color-mint-800)' }} />
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-heading)', margin: '0 0 14px' }}>
            One more thing before we talk
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)', margin: '0 0 32px' }}>
            To make the most of your Discover session, take a few minutes to complete this short questionnaire
            about your business. It helps us come prepared with the right questions.
          </p>
          <Button href={QUESTIONNAIRE_URL} variant="accent" size="lg" style={{ height: 48 }}>
            Complete the questionnaire
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
