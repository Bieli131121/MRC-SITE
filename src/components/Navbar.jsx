import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = ['Serviços', 'Sobre', 'Processo', 'Depoimentos', 'Contato']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <a className={styles.logo} href="#home">
          <img src="/logo.jpg" alt="MRC Logo" className={styles.logoImg} />
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <button className={styles.cta} onClick={() => scrollTo('contato')}>
          Orçamento Grátis
        </button>

        <button
          className={styles.mobileBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={mobileOpen ? styles.open : ''} />
          <span className={mobileOpen ? styles.open : ''} />
          <span className={mobileOpen ? styles.open : ''} />
        </button>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)}>
              {item}
            </a>
          ))}
          <button className={styles.cta} onClick={() => scrollTo('contato')}>
            Orçamento Grátis
          </button>
        </div>
      )}
    </>
  )
}
