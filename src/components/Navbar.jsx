import { useState, useEffect } from 'react'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre',    label: 'Sobre' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato',  label: 'Contato' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      background: scrolled ? 'rgba(13,12,10,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '72px',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.45rem',
            fontWeight: 900,
            color: 'var(--cream)',
            letterSpacing: '0.04em',
            lineHeight: 1,
          }}>MRC</span>
          <span style={{
            fontFamily: 'var(--font-cond)',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>Reforma &amp; Construção</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-cond)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{l.label}</a>
          ))}
          <a href="https://wa.me/5548999799447" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.72rem' }}>
            Orçamento Grátis
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            flexDirection: 'column', gap: '5px', padding: '4px',
          }}
          className="hamburger"
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '2px',
              background: 'var(--text)',
              transition: 'all 0.3s ease',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 1 ? 'opacity:0' : 'rotate(-45deg) translate(5px,-5px)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(13,12,10,0.98)',
          borderTop: '1px solid var(--border)',
          padding: '1.5rem 2rem 2rem',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'var(--font-cond)',
                fontSize: '1.1rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text)',
                padding: '0.9rem 0',
                borderBottom: '1px solid var(--border-soft)',
              }}
            >{l.label}</a>
          ))}
          <a href="https://wa.me/5548999799447" target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
          >Orçamento Grátis</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
