import { ReactNode, useState } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  items: string[]
  delay?: number
  animate?: boolean
}

export default function ServiceCard({ icon, title, description, items, delay = 0, animate = true }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`service-card ${animate ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-steel flex items-center justify-center text-accent mb-5">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{description}</p>

      {expanded && (
        <ul className="border-t border-slate-100 pt-4 space-y-2">
          {items.map((item, j) => (
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
        {expanded ? 'Réduire' : 'En savoir plus'}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  )
}
