import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { BOOKING_URL } from '../data/links';

export default function Header({ activePage, transparent = false }) {
  const [open, setOpen] = useState(false);

  const linkColor = transparent ? '#fff' : 'var(--text-primary)';
  const linkActiveColor = transparent ? 'var(--color-mint-300)' : 'var(--brand-primary)';

  const linkStyle = (isActive) => ({
    fontSize: 14,
    fontWeight: isActive ? 600 : 500,
    color: isActive ? linkActiveColor : linkColor,
  });

  const mobileLinkStyle = (isActive) => ({
    fontSize: 14,
    fontWeight: isActive ? 600 : 500,
    color: isActive ? 'var(--brand-primary)' : 'var(--text-primary)',
    padding: '12px 0',
  });

  return (
    <div
      style={
        transparent
          ? { position: 'relative', background: 'transparent' }
          : { background: '#fff', borderBottom: '1px solid var(--border-subtle)' }
      }
    >
      <div
        className="lul-header"
        style={{
          position: transparent ? 'relative' : 'static',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          padding: transparent ? '24px 56px' : '18px 56px',
          background: transparent ? 'transparent' : '#fff',
        }}
      >
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src={transparent ? '/assets/logo-white.png' : '/assets/logo-color.png'}
            alt="Level Up Leverage"
            className="lul-logo-header"
          />
        </Link>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 28, justifyContent: 'center' }}
          className="lul-nav-links"
        >
          <Link to="/what-we-build" style={linkStyle(activePage === 'what-we-build')}>
            What we build
          </Link>
          <Link to="/faq" style={linkStyle(activePage === 'faq')}>
            FAQ
          </Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }} className="lul-nav-links">
          <Button href={BOOKING_URL} variant="accent" size="md" style={{ height: 40 }}>
            Book a Discover session
          </Button>
        </div>
        <button
          type="button"
          className="lul-menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{
            gridColumn: 3,
            justifySelf: 'end',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
          }}
        >
          {open ? (
            <X style={{ width: 26, height: 26, color: transparent ? '#fff' : 'var(--text-heading)' }} />
          ) : (
            <Menu style={{ width: 26, height: 26, color: transparent ? '#fff' : 'var(--text-heading)' }} />
          )}
        </button>
      </div>

      <div
        className={`lul-mobile-menu${open ? ' is-open' : ''}`}
        style={{
          flexDirection: 'column',
          gap: 4,
          padding: '4px 20px 20px',
          background: '#fff',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <Link to="/what-we-build" onClick={() => setOpen(false)} style={mobileLinkStyle(activePage === 'what-we-build')}>
          What we build
        </Link>
        <Link to="/faq" onClick={() => setOpen(false)} style={mobileLinkStyle(activePage === 'faq')}>
          FAQ
        </Link>
        <Button
          href={BOOKING_URL}
          variant="accent"
          size="md"
          style={{ height: 44, marginTop: 8, width: '100%' }}
        >
          Book a Discover session
        </Button>
      </div>
    </div>
  );
}
