import { TESTIMONIALS } from '../data/constants'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="section-label">Depoimentos</div>
      <h2 className="section-title">
        O que nossos <span className="gold">clientes</span> dizem
      </h2>
      <p className="section-desc">
        Mais de 500 obras entregues e clientes que confiam na nossa qualidade para
        recomendar a amigos e familiares.
      </p>

      <div className={styles.grid}>
        {TESTIMONIALS.map(t => (
          <div className={styles.card} key={t.name}>
            <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.location}>{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
