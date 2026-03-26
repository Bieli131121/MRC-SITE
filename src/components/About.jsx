const values = [
  { title: 'Transparência', desc: 'Orçamento detalhado e sem surpresas. Você sabe exatamente onde cada real está sendo investido.' },
  { title: 'Prazo', desc: 'Cumprimos o combinado. Nossa reputação foi construída entregando obras no prazo acordado.' },
  { title: 'Qualidade', desc: 'Materiais selecionados e mão de obra especializada. Cada detalhe importa para a durabilidade da obra.' },
]

export default function About() {
  return (
    <section id="sobre" style={{ padding: 'clamp(4rem, 8vw, 7rem) 0', background: 'var(--bg)' }}>
      <div className="container">
        <div className="about-grid">

          {/* Left: visual block */}
          <div className="about-visual">
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '2px', padding: 'clamp(2rem, 4vw, 3.5rem)',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 'clamp(2rem, 4vw, 3.5rem)', width: '60px', height: '3px', background: 'var(--gold)' }} />
              <blockquote style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.2vw, 1.7rem)',
                fontStyle: 'italic', fontWeight: 700, color: 'var(--cream)',
                lineHeight: 1.45, marginBottom: '2rem',
              }}>
                "Tratamos cada obra como se fosse a nossa própria casa."
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--gold-dim), var(--gold))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', color: '#0d0c0a',
                }}>M</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--cream)', fontSize: '0.9rem' }}>Marcos Butke</div>
                  <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Fundador &amp; Responsável Técnico</div>
                </div>
              </div>
            </div>

            {/* Stat card — inline on mobile, floating on desktop */}
            <div className="about-stat-card">
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 900, color: '#0d0c0a', lineHeight: 1 }}>12+</div>
              <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.6)', marginTop: '0.3rem' }}>Anos<br />de Experiência</div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="tag" style={{ marginBottom: '1.2rem' }}>Nossa história</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', fontWeight: 700, color: 'var(--cream)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Construímos com<br />propósito e cuidado
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '1rem' }}>
              A MRC nasceu da convicção de que uma reforma bem-feita transforma não só o imóvel, mas a vida de quem mora nele. Com mais de 12 anos de experiência em Blumenau e região, construímos nossa reputação obra a obra.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Nossa equipe é formada por profissionais capacitados e comprometidos com o que mais importa: a sua satisfação.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {values.map((v, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', flexShrink: 0, border: '1px solid var(--gold-dim)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--cream)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{v.title}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.65 }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }
        .about-visual {
          position: relative;
          padding-bottom: 4rem;
        }
        .about-stat-card {
          position: absolute;
          bottom: 0;
          right: -2rem;
          background: var(--gold);
          padding: 1.8rem 2rem;
          border-radius: 2px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .about-visual {
            padding-bottom: 0;
          }
          .about-stat-card {
            position: static;
            display: inline-block;
            margin-top: 1.5rem;
            right: auto;
            bottom: auto;
          }
        }
      `}</style>
    </section>
  )
}
