import { STATS } from '../data/constants'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg} />
      <div className={styles.grid} />

      <div className={styles.content}>
        <div className={styles.tag}>MRC Reforma e Construção</div>

        <h1 className={styles.title}>
          Construímos <span className={styles.gold}>sonhos,</span>
          <span className={styles.line2}>entregamos</span> qualidade.
        </h1>

        <p className={styles.sub}>
          Do projeto à entrega das chaves — obras residenciais e comerciais executadas
          com excelência técnica, prazo e transparência.
        </p>

        <div className={styles.actions}>
          <a className="btn-primary" href="#contato">
            <span>Solicitar Orçamento</span>
            <span>→</span>
          </a>
          <a className="btn-outline" href="#serviços">
            <span>Ver Serviços</span>
          </a>
        </div>
      </div>

      <div className={styles.stats}>
        {STATS.map(s => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
