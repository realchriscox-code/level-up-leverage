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

      <div
        style={{
          position: 'relative',
          backgroundImage: "url('/assets/what-we-build-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '96px 0',
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
            What we build
          </span>
          <h1 style={{ fontSize: 44, lineHeight: 1.15, fontWeight: 800, color: '#fff', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Real projects, real leverage.
          </h1>
          <p style={{ maxWidth: 600, margin: '0 auto', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
            Every business is different, and so is every Leverage Kickstart. Tap any project below to see the
            kinds of scenario we solve. Don&apos;t worry if you don&apos;t see yours, we&apos;ll build it.
          </p>
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
