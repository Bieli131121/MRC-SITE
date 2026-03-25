const steps = [
  { num: '01', title: 'Visita & Diagnóstico', desc: 'Agendamos uma visita técnica gratuita para entender sua necessidade, medir o espaço e avaliar as condições do imóvel.' },
  { num: '02', title: 'Orçamento Detalhado', desc: 'Em até 48h você recebe um orçamento completo com materiais, mão de obra e cronograma — sem letras miúdas.' },
  { num: '03', title: 'Aprovação & Planejamento', desc: 'Alinhamos cada detalhe, definimos as datas de início e entrega, e assinamos um contrato que protege as duas partes.' },
  { num: '04', title: 'Execução com Acompanhamento', desc: 'Você recebe atualizações frequentes pelo WhatsApp. Nossa equipe trabalha com limpeza, organização e respeito ao seu espaço.' },
  { num: '05', title: 'Entrega & Garantia', desc: 'Vistoria final conjunta, documentação de garantia e suporte pós-obra. Ficamos por aqui depois do término.' },
]

export default function Process() {
  return (
    <section id="processo" style={{ padding: 'clamp(4rem, 8vw, 7rem) 0', background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="process-header">
          <div>
            <div className="tag" style={{ marginBottom: '1rem' }}>Como trabalhamos</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: 'var(--cream)', lineHeight: 1.15 }}>
              Do primeiro contato<br />à entrega da chave
            </h2>
          </div>
          <a href="https://wa.me/5548999799447" target="_blank" rel="noopener noreferrer" className="btn-ghost process-cta">
            Começar agora
          </a>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="process-line" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((s, i) => (
              <div key={i} className="process-step" style={{ borderBottom: i < steps.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{
                    width: '56px', height: '56px', border: '1px solid var(--gold-dim)', borderRadius: '2px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--bg-card)', position: 'relative', zIndex: 1, flexShrink: 0,
                  }}>
                    <span style={{ fontFamily: 'var(--font-cond)', fontSize: '1rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.05em' }}>{s.num}</span>
                  </div>
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.6rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.75, maxWidth: '560px' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .process-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .process-line {
          position: absolute;
          left: 28px;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, var(--gold-dim), transparent);
          opacity: 0.5;
        }
        .process-step {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 1.5rem;
          padding: 2.2rem 0;
          align-items: flex-start;
        }
        @media (max-width: 600px) {
          .process-header { margin-bottom: 2.5rem; }
          .process-cta { width: 100%; justify-content: center; }
          .process-line { left: 20px; }
          .process-step {
            grid-template-columns: 60px 1fr;
            gap: 1rem;
            padding: 1.6rem 0;
          }
          .process-step > div:first-child > div {
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>
    </section>
  )
}
