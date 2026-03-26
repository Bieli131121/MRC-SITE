const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#processo', label: 'Processo' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', padding: 'clamp(3rem, 6vw, 4rem) 0 2.5rem' }}>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--cream)', lineHeight: 1 }}>MRC</div>
              <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '2px' }}>Reforma &amp; Construção</div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.75, maxWidth: '280px' }}>
              Obras residenciais e comerciais executadas com excelência técnica, prazo e transparência em Garopaba e região.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>Navegação</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {navLinks.map(l => (
                <a key={l.href} href={l.href} style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--cream)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>Contato</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {['Garopaba, SC', '(48) 99979-9447', 'Seg–Sex: 8h às 18h'].map((line, i) => (
                <div key={i} style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 300 }}>{line}</div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} MRC Reforma e Construção · Todos os direitos reservados
          </div>
          <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            CNPJ 61.519.356/0001-20
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3.5rem;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 440px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
