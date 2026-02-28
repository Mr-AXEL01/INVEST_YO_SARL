import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import { BRAND } from '../../utils/constants'
import { validateContactForm, type ContactForm, type FormErrors } from '../../utils/validation'
import SectionHeading from '../ui/SectionHeading'

const INITIAL_FORM: ContactForm = { name: '', email: '', phone: '', subject: '', message: '' }

const CONTACT_ITEMS = [
  {
    label: 'Adresse',
    value: BRAND.address,
    icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z',
    extra: <circle cx="12" cy="10" r="3" />,
  },
  {
    label: 'Téléphone',
    value: BRAND.phone,
    icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z',
  },
  {
    label: 'Email',
    value: BRAND.email,
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
    extra: <polyline points="22,6 12,13 2,6" />,
  },
]

export default function Contact() {
  const [ref, inView] = useInView(0.1)
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateContactForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm(INITIAL_FORM)
    }, 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-gradient-to-b from-navy to-[#050D1A]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="Contact"
          title="Parlons de Votre Projet"
          subtitle="Contactez-nous pour un devis gratuit ou pour toute information sur nos services."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className={inView ? 'animate-slide-in-left' : 'opacity-0'} style={{ animationFillMode: 'forwards' }}>
            <div className="space-y-7">
              {CONTACT_ITEMS.map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-[10px] flex-shrink-0 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={c.icon} />
                      {c.extra}
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-[1.5px] mb-1">{c.label}</div>
                    <div className="text-[15px] text-white leading-snug">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border border-white/[0.06] h-[200px] bg-gradient-to-br from-deep-blue to-steel flex items-center justify-center">
              <div className="text-center text-slate-400">
                <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="text-[13px] mt-2">M'Rirt – Khénifra, Maroc</div>
                <div className="text-[11px] mt-1 text-slate-500">Google Maps Integration</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={inView ? 'animate-fade-in-up' : 'opacity-0'}
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            {submitted ? (
              <div className="text-center py-16 bg-accent/[0.06] rounded-2xl border border-accent/15">
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5 text-green-500">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-[22px] font-bold mb-2">Message Envoyé !</h3>
                <p className="text-slate-400 text-[15px]">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      className={`input-field ${errors.name ? 'error' : ''}`}
                      placeholder="Votre Nom *"
                      value={form.name}
                      onChange={handleChange('name')}
                      aria-label="Nom"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                  </div>
                  <div>
                    <input
                      className={`input-field ${errors.email ? 'error' : ''}`}
                      type="email"
                      placeholder="Votre Email *"
                      value={form.email}
                      onChange={handleChange('email')}
                      aria-label="Email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input className="input-field" placeholder="Téléphone" value={form.phone} onChange={handleChange('phone')} aria-label="Téléphone" />
                  <input className="input-field" placeholder="Sujet" value={form.subject} onChange={handleChange('subject')} aria-label="Sujet" />
                </div>
                <div>
                  <textarea
                    className={`input-field resize-y min-h-[130px] ${errors.message ? 'error' : ''}`}
                    placeholder="Votre Message *"
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    aria-label="Message"
                    aria-required="true"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
                </div>
                <button type="submit" className="btn-primary w-full mt-2 text-base">
                  Envoyer le Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
