import { useState } from 'react'
import { SERVICES, CONTACT_INFO } from '../data/constants'
import styles from './Contact.module.css'

const INITIAL_FORM = { nome: '', telefone: '', email: '', servico: '', mensagem: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(INITIAL_FORM)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section className={`section ${styles.contact}`} id="contato">
      <div className="section-label">Fale conosco</div>
      <h2 className="section-title">
        Solicite seu <span className="gold">orçamento</span>
      </h2>

      <div className={styles.grid}>
        {/* Info */}
        <div className={styles.info}>
          <p className={styles.infoIntro}>
            Entre em contato conosco para agendar uma visita técnica gratuita.
            Nossa equipe está pronta para atendê-lo e transformar seu projeto em realidade.
          </p>

          {CONTACT_INFO.map(c => (
            <div className={styles.item} key={c.label}>
              <div className={styles.itemIcon}>{c.icon}</div>
              <div>
                <div className={styles.itemLabel}>{c.label}</div>
                <div className={styles.itemValue} style={{ whiteSpace: 'pre-line' }}>
                  {c.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Nome</label>
              <input
                className={styles.input}
                name="nome" value={form.nome} onChange={handleChange}
                placeholder="Seu nome completo" required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Telefone</label>
              <input
                className={styles.input}
                name="telefone" value={form.telefone} onChange={handleChange}
                placeholder="(00) 0 0000-0000" required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>E-mail</label>
            <input
              className={styles.input}
              type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="seu@email.com.br"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Serviço de interesse</label>
            <select
              className={styles.select}
              name="servico" value={form.servico} onChange={handleChange}
            >
              <option value="">Selecione um serviço</option>
              {SERVICES.map(s => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Mensagem</label>
            <textarea
              className={styles.textarea}
              name="mensagem" value={form.mensagem} onChange={handleChange}
              placeholder="Descreva sua obra ou reforma..."
            />
          </div>

          <button
            type="submit"
            className={`btn-primary ${styles.submitBtn}`}
          >
            {sent ? '✓ Mensagem enviada!' : 'Enviar Solicitação →'}
          </button>
        </form>
      </div>
    </section>
  )
}
