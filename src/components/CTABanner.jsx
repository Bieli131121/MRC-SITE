import styles from './CTABanner.module.css'

export default function CTABanner() {
  return (
    <div className={styles.cta}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Pronto para transformar<br />
          seu <span className={styles.gold}>espaço?</span>
        </h2>
        <p className={styles.desc}>
          Entre em contato agora e receba um orçamento gratuito e sem compromisso.
          Atendemos toda a região.
        </p>
        <div className={styles.buttons}>
          <a
            className={styles.whatsapp}
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
          >
            <span>💬</span>
            <span>Falar no WhatsApp</span>
          </a>
          <a className="btn-primary" href="#contato">
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </div>
    </div>
  )
}
