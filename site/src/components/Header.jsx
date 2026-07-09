import { Link } from 'react-router-dom';
import Button from './Button';
import { BOOKING_URL } from '../data/links';

export default function Header({ activePage }) {
  const linkStyle = (isActive) => ({
    fontSize: 14,
    fontWeight: isActive ? 600 : 500,
    color: isActive ? 'var(--brand-primary)' : 'var(--text-primary)',
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 56px',
        background: '#fff',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <Link to="/">
        <img src="/assets/logo-color.png" alt="Level Up Leverage" style={{ height: 48 }} />
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
    </div>
  );
}
