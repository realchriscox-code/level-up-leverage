import { Check, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { processSteps } from '../data/processSteps';
import { whoWeServe } from '../data/whoWeServe';
import { BOOKING_URL } from '../data/links';

const cardStyle = {
  background: '#fff',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-card-lg)',
  boxShadow: 'var(--shadow-lg)',
};

function ProcessStep({ step }) {
  return (
    <div
      className="lul-step-card"
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        gap: 32,
        ...cardStyle,
        padding: '32px 36px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 56,
          fontWeight: 800,
          color: 'var(--color-mint-300)',
        }}
      >
        {step.number}
      </div>
      <div style={{ minWidth: 0 }}>
        <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text-heading)', margin: '0 0 10px' }}>
          {step.title}
        </h3>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            margin: '0 0 14px',
            maxWidth: 600,
          }}
        >
          {step.description}
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {step.items.map((item) => (
            <li key={item} style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--text-primary)' }}>
              <Check
                style={{ width: 16, height: 16, color: 'var(--color-mint-600)', flexShrink: 0, marginTop: 2 }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServeCard({ item }) {
  const Icon = item.icon;
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 'var(--radius-card-lg)',
        boxShadow: 'var(--shadow-lg)',
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 9999,
          background: 'var(--color-mint-100)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon style={{ width: 18, height: 18, color: 'var(--color-mint-800)' }} />
      </div>
      <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-heading)' }}>{item.title}</div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.4 }}>{item.desc}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          minHeight: 760,
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: "url('/assets/hero-bg-office.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
        <Header activePage="home" transparent />
        <div
          className="lul-wrap"
          style={{
            position: 'relative',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '64px 0 96px',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              color: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 9999,
              padding: '8px 18px',
              marginBottom: 32,
              background: 'rgba(255,255,255,0.05)',
            }}
          >
            Now booking Discover sessions.{' '}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-mint-300)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              Book yours <ArrowRight style={{ width: 14, height: 14 }} />
            </a>
          </span>
          <h1
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              fontWeight: 800,
              color: '#fff',
              margin: '0 0 24px',
              letterSpacing: '-0.02em',
              maxWidth: 820,
            }}
          >
            Less busywork.
            <br />
            More leverage.
          </h1>
          <p
            style={{
              maxWidth: 600,
              margin: '0 0 40px',
              fontSize: 18,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            We build operational leverage into relationship-driven businesses through better systems,
            practical technology, and hands-on implementation.
          </p>
          <div className="lul-hero-ctas" style={{ display: 'flex', gap: 16 }}>
            <Button href={BOOKING_URL} variant="accent" size="lg" style={{ height: 48 }}>
              Book a Discover session
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              size="lg"
              style={{ height: 48, background: 'transparent', borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}
            >
              See how it works
            </Button>
          </div>
        </div>
      </div>

      {/* Process */}
      <div
        id="how-it-works"
        style={{ padding: '64px 0', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}
      >
        <div className="lul-wrap">
          <div
            className="lul-process-grid"
            style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 40, alignItems: 'start' }}
          >
            <img
              src="/assets/process-planning.png"
              alt="Consultant mapping out a project roadmap on a whiteboard and tablet"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 'var(--radius-card-lg)',
                boxShadow: 'var(--shadow-md)',
                position: 'sticky',
                top: 24,
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div>
                <h2
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    margin: '0 0 12px',
                    maxWidth: 1100,
                    width: '100%',
                  }}
                >
                  From Conversation to Implementation
                </h2>
                <p style={{ fontSize: 16, color: 'var(--text-secondary)', margin: 0, maxWidth: 520 }}>
                  The Leverage Kickstart process, in three stages.
                </p>
              </div>
              {processSteps.map((step) => (
                <ProcessStep key={step.number} step={step} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Who we serve */}
      <div style={{ padding: '80px 0', background: 'var(--color-navy-700)' }}>
        <div className="lul-wrap">
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fff', margin: 0 }}>Who we serve</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', margin: '10px 0 0' }}>
              Our sweet spot: businesses where relationships drive growth.
            </p>
          </div>
          <div className="lul-serve-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {whoWeServe.map((item) => (
              <ServeCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Founder */}
      <div style={{ padding: '72px 0', background: '#fff' }}>
        <div
          className="lul-wrap lul-founder-grid"
          style={{ display: 'grid', gridTemplateColumns: '440px 1fr', gap: 40, alignItems: 'center' }}
        >
          <img
            src="/assets/founder-chris-cox.jpg"
            alt="Chris Cox, founder of Level Up Leverage"
            className="lul-founder-img"
            style={{
              borderRadius: 'var(--radius-card)',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
          <div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12,
                letterSpacing: '0.12em',
                color: 'var(--text-mint)',
                textTransform: 'uppercase',
              }}
            >
              Why we do this
            </span>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-heading)', margin: '8px 0 14px' }}>
              &ldquo;Technology isn&apos;t the goal. Leverage is.&rdquo;
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-secondary)', margin: '0 0 14px' }}>
              Chris has spent 18 years in the real estate space building operations for growing real estate
              teams before starting Level Up Leverage. After rebuilding the same systems over and over, he
              started helping other relationship-driven businesses skip the trial and error.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '64px 0', background: 'var(--color-navy-700)', textAlign: 'center' }}>
        <div className="lul-wrap">
          <h2 style={{ fontSize: 30, fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>
            Ready to build more leverage?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: '0 0 26px' }}>
            Start with a complimentary Discover session. No pressure, no pitch, just clarity.
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
