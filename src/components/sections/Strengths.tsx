import { useInView } from '../../hooks/useInView'
import { STRENGTHS } from '../../utils/constants'
import SectionHeading from '../ui/SectionHeading'

export default function Strengths() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="atouts" ref={ref} className="py-24 px-6 bg-slate-50">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="Nos Atouts"
          title="Pourquoi Nous Choisir"
          subtitle="Des moyens humains et matériels au service de votre réussite industrielle et numérique."
          light
        />

        <div className="max-w-[700px] mx-auto">
          {STRENGTHS.map((s, i) => (
            <div
              key={i}
              className={`flex items-start gap-5 py-6 ${
                i < STRENGTHS.length - 1 ? 'border-b border-navy/[0.08]' : ''
              } ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-11 h-11 rounded-[10px] flex-shrink-0 bg-gradient-to-br from-navy to-steel flex items-center justify-center text-accent text-sm font-bold">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-base text-slate-600 leading-relaxed pt-2">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
