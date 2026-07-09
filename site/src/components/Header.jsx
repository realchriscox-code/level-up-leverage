import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { BOOKING_URL } from '../data/links';

export default function Header({ activePage }) {
  const [open, setOpen] = useState(false);

  const linkStyle = (isActive) => ({
    fontSize: 14,
    fontWeight: isActive ? 600 : 500,
    color: isActive ? 'var(--brand-primary)' : 'var(--text-primary)',
  });

  return (
    <div style={{ background: '#fff', borderBottom: '1px solid var(--border-subtle)' }}>
      <div
        className="lul-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 56px',
          background: '#fff',
        }}
      >
        <Link to="/" onClick={() => setOpen(false)}>
          <img src="/assets/logo-color.png" alt="Level Up Leverage" className="lul-logo-header" />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="lul-nav-links">
          <a href="#" style={linkStyle(activePage === 'about')}>
            About
          </a>
          <a href="#" style={linkStyle(activePage === 'services')}>
            Services
          </a>
          <Link to="/faq" style={linkStyle(activePage === 'faq')}>
            FAQ
          </Link>
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
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
          }}
        >
          {open ? (
            <X style={{ width: 26, height: 26, color: 'var(--text-heading)' }} />
          ) : (
            <Menu style={{ width: 26, height: 26, color: 'var(--text-heading)' }} />
          )}
        </button>
      </div>

      <div
        className={`lul-mobile-menu${open ? ' is-open' : ''}`}
        style={{
          flexDirection: 'column',
          gap: 4,
          padding: '4px 20px 20px',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <a
          href="#"
          onClick={() => setOpen(false)}
          style={{ ...linkStyle(activePage === 'about'), padding: '12px 0' }}
        >
          About
        </a>
        <a
          href="#"
          onClick={() => setOpen(false)}
          style={{ ...linkStyle(activePage === 'services'), padding: '12px 0' }}
        >
          Services
        </a>
        <Link
          to="/faq"
          onClick={() => setOpen(false)}
          style={{ ...linkStyle(activePage === 'faq'), padding: '12px 0' }}
        >
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
