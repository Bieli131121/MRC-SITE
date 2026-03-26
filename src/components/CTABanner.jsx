export default function CTABanner() {
  return (
    <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 0', background: 'var(--bg-alt)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 100% at 80% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="cta-deco" style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-display)', fontSize: 'clamp(80px, 14vw, 280px)', fontWeight: 900, color: 'transparent', WebkitTextStroke: '1px rgba(201,168,76,0.05)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>ORC</div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-inner">
          <div style={{ maxWidth: '560px' }}>
            <div className="tag" style={{ marginBottom: '1.2rem' }}>Pronto para começar?</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', fontWeight: 700, color: 'var(--cream)', lineHeight: 1.2, marginBottom: '1rem' }}>
              Seu orçamento em<br /><span style={{ color: 'var(--gold)' }}>48 horas, sem compromisso.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.8 }}>
              Fale agora pelo WhatsApp. Nossa equipe entra em contato rapidamente para dar início ao seu projeto.
            </p>
          </div>
          <div className="cta-action">
            <a href="https://wa.me/5548999799447" target="_blank" rel="noopener noreferrer" className="btn-primary cta-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar no WhatsApp
            </a>
            <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>✓ Sem compromisso &nbsp;·&nbsp; ✓ Resposta rápida</div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2.5rem;
        }
        .cta-action {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
          flex-shrink: 0;
        }
        @media (max-width: 640px) {
          .cta-deco { display: none; }
          .cta-action { width: 100%; align-items: stretch; }
          .cta-btn { justify-content: center; }
        }
      `}</style>
    </section>
  )
}
