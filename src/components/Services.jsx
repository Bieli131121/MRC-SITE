const services = [
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: 'Reformas Residenciais', desc: 'Banheiros, cozinhas, quartos e áreas completas. Renovamos com cuidado, respeitando cada detalhe da sua casa.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>, title: 'Obras Comerciais', desc: 'Lojas, escritórios e galpões. Entendemos que seu negócio não pode parar — planejamos cada etapa para minimizar impactos.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>, title: 'Construção do Zero', desc: 'Do terreno à chave na mão. Gerenciamos o projeto completo com arquitetos parceiros, engenheiros e fornecedores homologados.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>, title: 'Manutenção Predial', desc: 'Reparos hidráulicos, elétricos e estruturais. Equipe ágil para manter seu imóvel sempre em perfeitas condições.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title: 'Revestimentos & Pisos', desc: 'Porcelanato, cerâmica, pedras naturais e madeira. Instalação precisa e acabamento impecável em qualquer ambiente.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Gestão de Obra', desc: 'Coordenamos todos os profissionais, materiais e prazos. Você acompanha tudo pelo WhatsApp, sem preocupações.' },
]

export default function Services() {
  return (
    <section id="servicos" style={{ padding: 'clamp(4rem, 8vw, 7rem) 0', background: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="tag" style={{ marginBottom: '1rem' }}>O que fazemos</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 700, color: 'var(--cream)', lineHeight: 1.15, maxWidth: '500px' }}>
            Serviços que<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>transformam</em> espaços
          </h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card"
              onMouseEnter={e => e.currentTarget.style.background = '#201e19'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
            >
              <div style={{ color: 'var(--gold)', marginBottom: '1.2rem', opacity: 0.9 }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.75rem' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px;
          background: var(--border);
        }
        .service-card {
          background: var(--bg-card);
          padding: 2.5rem;
          transition: background var(--transition);
          cursor: default;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .services-grid { grid-template-columns: 1fr; }
          .service-card { padding: 1.8rem 1.5rem; }
        }
      `}</style>
    </section>
  )
}
