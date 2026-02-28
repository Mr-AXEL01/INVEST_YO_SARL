import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import { SERVICES } from '../../utils/constants'
import SectionHeading from '../ui/SectionHeading'

const ICON_PATHS: Record<string, string> = {
  bolt: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  wrench: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
  cart: 'M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6',
  truck: 'M1 3h15v13H1zM16 8h4l3 3v5h-7V8z',
  code: '',
}

function ServiceIcon({ icon }: { icon: string }) {
  if (icon === 'code') {
    return (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={ICON_PATHS[icon]} />
      {icon === 'cart' && (<><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /></>)}
      {icon === 'truck' && (<><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>)}
    </svg>
  )
}

export default function Services() {
  const [ref, inView] = useInView(0.1)
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="services" ref={ref} className="py-24 px-6 bg-slate-50">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="Nos Services"
          title="Expertise Multisectorielle"
          subtitle="Une gamme complète de solutions industrielles et numériques pour répondre à vos besoins les plus exigeants."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const isExpanded = expanded === i
            return (
              <div
                key={i}
                className={`service-card ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
                onClick={() => setExpanded(isExpanded ? null : i)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onKeyDown={(e) => e.key === 'Enter' && setExpanded(isExpanded ? null : i)}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-steel flex items-center justify-center text-accent mb-5">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>

                {isExpanded && (
                  <ul className="border-t border-slate-100 pt-4 space-y-2">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 text-[13px] text-accent font-semibold flex items-center gap-1.5">
                  {isExpanded ? 'Réduire' : 'En savoir plus'}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
