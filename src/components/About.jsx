import styles from './About.module.css'

const POINTS = [
  { icon: '🏅', title: 'Equipe Certificada', desc: 'Todos os nossos profissionais são qualificados e seguem rigorosos padrões de segurança e qualidade.' },
  { icon: '📋', title: 'Obras com Garantia', desc: 'Emitimos garantia técnica em todas as nossas obras, assegurando sua tranquilidade após a entrega.' },
  { icon: '💬', title: 'Atendimento Personalizado', desc: 'Cada cliente recebe atenção exclusiva do início ao fim, com comunicação transparente em todas as etapas.' },
]

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="sobre">
      <div className={styles.grid}>
        <div className={styles.visual}>
          <div className={styles.mainBox}>
            <svg width="160" height="140" viewBox="0 0 160 140" fill="none" style={{ opacity: 0.6 }}>
              <polyline points="10,120 30,50 60,75 100,40 130,60 150,120" stroke="#C9973A" strokeWidth="3" fill="none" strokeLinejoin="round"/>
              <rect x="28" y="50" width="12" height="70" stroke="#C9973A" strokeWidth="2" fill="none"/>
              <line x1="10" y1="120" x2="150" y2="120" stroke="#C9973A" strokeWidth="2"/>
            </svg>
            <div className={styles.badge}>
              <span className={styles.badgeNum}>12+</span>
              <span className={styles.badgeText}>Anos de{'\n'}Mercado</span>
            </div>
          </div>
        </div>

        <div className={styles.text}>
          <div className="section-label">Quem somos</div>
          <h2 className="section-title">
            Tradição e <span className="gold">excelência</span> em cada obra
          </h2>
          <p className="section-desc">
            Há mais de uma década no mercado, a MRC Reforma e Construção é sinônimo de
            confiança, qualidade e compromisso. Nossa equipe de profissionais qualificados
            transforma projetos em realidade com atenção a cada detalhe.
          </p>

          <div className={styles.points}>
            {POINTS.map(p => (
              <div className={styles.point} key={p.title}>
                <div className={styles.pointIcon}>{p.icon}</div>
                <div>
                  <div className={styles.pointTitle}>{p.title}</div>
                  <div className={styles.pointDesc}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
