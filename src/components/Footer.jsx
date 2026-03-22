import { SERVICES } from '../data/constants'
import styles from './Footer.module.css'

const COMPANY_LINKS = ['Sobre nós', 'Processo', 'Depoimentos', 'Blog']
const SOCIAL_LINKS  = ['WhatsApp', 'E-mail', 'Instagram', 'Facebook']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div>
          <div className={styles.brandName}>MR<span>C</span></div>
          <div className={styles.brandSub}>Reforma e Construção</div>
          <p className={styles.brandDesc}>
            Construindo com qualidade, entregando com confiança há mais de 12 anos.
          </p>
        </div>

        {/* Serviços */}
        <div>
          <div className={styles.colTitle}>Serviços</div>
          <ul className={styles.colLinks}>
            {SERVICES.map(s => (
              <li key={s.name}><a href="#serviços">{s.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <div className={styles.colTitle}>Empresa</div>
          <ul className={styles.colLinks}>
            {COMPANY_LINKS.map(item => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <div className={styles.colTitle}>Contato</div>
          <ul className={styles.colLinks}>
            {SOCIAL_LINKS.map(item => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {year} <span>MRC Reforma e Construção</span>. Todos os direitos reservados.
        </span>
        <span className={styles.copy}>CNPJ: 00.000.000/0001-00</span>
      </div>
    </footer>
  )
}
