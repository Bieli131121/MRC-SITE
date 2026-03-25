import { useState } from 'react'

const inputStyle = {
  width: '100%',
  background: 'var(--bg)',
  border: '1px solid var(--border-soft)',
  borderRadius: 'var(--radius)',
  padding: '0.9rem 1.1rem',
  color: 'var(--text)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.93rem',
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [form, setForm] = useState({ nome: '', telefone: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Olá! Me chamo *${form.nome}*. Telefone: ${form.telefone}.%0A${form.mensagem}`
    window.open(`https://wa.me/5548999799447?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contato" style={{ padding: '7rem 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'flex-start',
        }}>

          {/* Left */}
          <div>
            <div className="tag" style={{ marginBottom: '1.2rem' }}>Fale Conosco</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700,
              color: 'var(--cream)',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              Vamos conversar<br />sobre seu projeto?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '3rem' }}>
              Preencha o formulário ou entre em contato diretamente. Respondemos em até 2 horas nos dias úteis.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {[
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  label: 'Localização',
                  value: 'Blumenau, SC — Atendemos toda a região',
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
                  label: 'WhatsApp',
                  value: '(47) 99999-9999',
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  label: 'E-mail',
                  value: 'contato@mrcreforma.com.br',
                },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', flexShrink: 0,
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gold)',
                  }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{c.label}</div>
                    <div style={{ color: 'var(--cream)', fontSize: '0.92rem', fontWeight: 400 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '2px',
            padding: '2.8rem',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '0.75rem' }}>Mensagem enviada!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 300 }}>Você foi redirecionado para o WhatsApp. Em breve entraremos em contato.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>Nome *</label>
                  <input
                    name="nome" required value={form.nome} onChange={onChange}
                    placeholder="Seu nome completo"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>Telefone / WhatsApp *</label>
                  <input
                    name="telefone" required value={form.telefone} onChange={onChange}
                    placeholder="(47) 99999-9999"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>Sobre o projeto</label>
                  <textarea
                    name="mensagem" value={form.mensagem} onChange={onChange}
                    rows={4}
                    placeholder="Descreva brevemente o que você precisa..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar pelo WhatsApp
                </button>
                <p style={{ fontFamily: 'var(--font-cond)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', textAlign: 'center' }}>
                  Seus dados são usados apenas para contato
                </p>
              </form>
            )}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contato .container > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
