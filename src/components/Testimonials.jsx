const reviews = [
  { name: 'Ana Paula Schroeder', role: 'Reforma de apartamento · Garopaba', text: 'A MRC reformou nossa cozinha e banheiro em tempo recorde. O Marcos foi pontual, transparente e a equipe deixou tudo impecável. Com certeza vou chamar para a próxima reforma.', stars: 5 },
  { name: 'Carlos Henrique Lima', role: 'Obra comercial · Garopaba', text: 'Contratamos para reformar nossa loja sem fechar durante as obras. O planejamento foi preciso, respeitaram os horários combinados e o resultado superou as expectativas.', stars: 5 },
  { name: 'Fernanda Büchele', role: 'Reforma completa · Garopaba', text: 'Do projeto à entrega, a comunicação foi excelente. Recebi fotos e vídeos do andamento toda semana. Entregaram no prazo e dentro do orçamento. Recomendo sem hesitar.', stars: 5 },
  { name: 'Ricardo Waltrik', role: 'Reforma de sala e quarto · Garopaba', text: 'Equipe super organizada, materiais de qualidade e acabamento perfeito. O preço foi justo e o atendimento foi diferenciado do início ao fim. 10 de 10.', stars: 5 },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" style={{ padding: 'clamp(4rem, 8vw, 7rem) 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="tag" style={{ marginBottom: '1rem' }}>Depoimentos</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: 'var(--cream)', lineHeight: 1.15 }}>
              Quem já confiou<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>na nossa equipe</em>
            </h2>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 900, color: 'var(--gold)', opacity: 0.25, lineHeight: 1 }}>"</div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card"
              onMouseEnter={e => e.currentTarget.style.background = '#1e1c17'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
            >
              <Stars count={r.stars} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1.75, flex: 1 }}>"{r.text}"</p>
              <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '1rem' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--cream)', fontSize: '0.9rem' }}>{r.name}</div>
                <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5px;
          background: var(--border);
        }
        .testimonial-card {
          background: var(--bg-card);
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          transition: background var(--transition);
        }
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr; }
          .testimonial-card { padding: 1.8rem 1.5rem; }
        }
      `}</style>
    </section>
  )
}
