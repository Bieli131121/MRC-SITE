import { PROCESS_STEPS } from '../data/constants'
import styles from './Process.module.css'

export default function Process() {
  return (
    <section className={`section ${styles.process}`} id="processo">
      <div style={{ textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Como trabalhamos</div>
        <h2 className="section-title">
          Nosso <span className="gold">processo</span> de trabalho
        </h2>
      </div>

      <div className={styles.steps}>
        {PROCESS_STEPS.map(p => (
          <div className={styles.step} key={p.num}>
            <div className={styles.stepNum}>{p.num}</div>
            <div className={styles.stepName}>{p.name}</div>
            <p className={styles.stepDesc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
