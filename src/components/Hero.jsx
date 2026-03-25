export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background layers */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 10% 80%, rgba(201,168,76,0.04) 0%, transparent 50%),
          linear-gradient(160deg, #0d0c0a 0%, #151310 50%, #0d0c0a 100%)
        `,
      }} />

      {/* Texture grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Large decorative number */}
      <div style={{
        position: 'absolute',
        right: '-2%',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(200px, 28vw, 420px)',
        fontWeight: 900,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(201,168,76,0.06)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>MRC</div>

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '700px' }}>

          <div className="tag fade-up fade-up-1" style={{ marginBottom: '2rem' }}>
            Reforma &amp; Construção · Blumenau, SC
          </div>

          <h1 className="fade-up fade-up-2" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            color: 'var(--cream)',
            marginBottom: '1.6rem',
            letterSpacing: '-0.01em',
          }}>
            Cada obra conta<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold) 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 4s linear infinite',
            }}>uma história sua.</span>
          </h1>

          <p className="fade-up fade-up-3" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            fontWeight: 300,
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            maxWidth: '520px',
            marginBottom: '2.8rem',
          }}>
            Obras residenciais e comerciais executadas com excelência técnica,
            cumprimento de prazos e total transparência — do projeto à entrega.
          </p>

          <div className="fade-up fade-up-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/5548999799447" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Orçamento
            </a>
            <a href="#servicos" className="btn-ghost">
              Ver Serviços
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap',
          }} className="fade-up fade-up-4">
            {[
              { n: '+200', label: 'Obras Concluídas' },
              { n: '12+',  label: 'Anos de Experiência' },
              { n: '98%',  label: 'Clientes Satisfeitos' },
            ].map(s => (
              <div key={s.n}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}>{s.n}</div>
                <div style={{
                  fontFamily: 'var(--font-cond)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginTop: '0.35rem',
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: 0.4,
      }}>
        <span style={{ fontFamily: 'var(--font-cond)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'fadeUp 1.5s ease infinite alternate',
        }} />
      </div>
    </section>
  )
}
