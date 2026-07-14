import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import { BOOKING_URL } from '../data/links';

export default function WhatWeBuild() {
  return (
    <div>
      <Header activePage="what-we-build" />

      <div style={{ backgroundColor: 'var(--color-navy-900)', padding: '72px 0' }}>
        <div
          className="lul-wrap lul-wwb-hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}
        >
          <div>
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
              What we build
            </span>
            <h1 style={{ fontSize: 44, lineHeight: 1.15, fontWeight: 800, color: '#fff', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
              Real projects, real leverage.
            </h1>
            <p style={{ maxWidth: 520, margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
              Every business is different, and so is every Leverage Kickstart. Tap any project below to see the
              kinds of scenario we solve. Don&apos;t worry if you don&apos;t see yours, we&apos;ll build it.
            </p>
          </div>
          <img
            src="/assets/what-we-build-hero.png"
            alt="Professional working at a desk with systems and dashboards on screen"
            style={{
              width: '100%',
              height: 380,
              objectFit: 'cover',
              borderRadius: 'var(--radius-card-lg)',
              boxShadow: 'var(--shadow-lg)',
            }}
          />
        </div>
      </div>

      <div style={{ padding: '72px 0', background: 'var(--surface-subtle)' }}>
        <div className="lul-wrap">
          <div className="lul-proj-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '64px 0', background: 'var(--color-navy-700)', textAlign: 'center' }}>
        <div className="lul-wrap">
          <h2 style={{ fontSize: 30, fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>Don&apos;t see your project?</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: '0 0 26px' }}>
            This is a sample of what&apos;s possible, not the limit of what we build. Tell us what&apos;s slowing you
            down and we&apos;ll design around it.
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
