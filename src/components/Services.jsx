import { SERVICES } from '../data/constants'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section className="section" id="serviços">
      <div className="section-label">O que fazemos</div>
      <h2 className="section-title">
        Soluções completas em<br />
        <span className="gold">reforma e construção</span>
      </h2>
      <p className="section-desc">
        Da fundação ao acabamento, oferecemos serviços integrados com equipe própria
        e materiais de alta qualidade.
      </p>

      <div className={styles.grid}>
        {SERVICES.map((s, i) => (
          <div className={styles.card} key={s.name}>
            <span className={styles.num}>0{i + 1}</span>
            <div className={styles.icon}>{s.icon}</div>
            <div className={styles.name}>{s.name}</div>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
