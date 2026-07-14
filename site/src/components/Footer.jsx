import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div style={{ padding: '40px 0', background: 'var(--color-navy-900)' }}>
      <div className="lul-wrap lul-footer-row">
        <img src="/assets/logo-white.png" alt="Level Up Leverage" className="lul-logo-footer" />
        <div style={{ display: 'flex', gap: 24 }}>
          <Link to="/what-we-build" style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
            What we build
          </Link>
          <Link to="/faq" style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
            FAQ
          </Link>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>© 2026 Level Up Leverage</div>
      </div>
    </div>
  );
}
