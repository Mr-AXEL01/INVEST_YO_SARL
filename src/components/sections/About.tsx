import { useInView } from '../../hooks/useInView'
import { useCounter } from '../../hooks/useCounter'
import { BRAND, VALUES } from '../../utils/constants'
import SectionHeading from '../ui/SectionHeading'

const COMPANY_INFO = [
  ['Raison Sociale', BRAND.legal],
  ['Gérant', BRAND.manager],
  ['Siège', 'M\'Rirt – Khénifra, Maroc'],
  ['Fondée', '08 Mars 2024'],
  ['Forme Juridique', 'SARL'],
]

export default function About() {
  const [ref, inView] = useInView(0.1)
  const projectCount = useCounter(150, 2000, inView)
  const clientCount = useCounter(50, 2000, inView)
  const yearCount = useCounter(1, 800, inView)

  return (
    <section
      id="apropos"
      ref={ref}
      className="py-24 px-6 bg-gradient-to-b from-navy to-deep-blue"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          label="À Propos"
          title="Qui Sommes-Nous"
          subtitle="INVEST YO SARL est une société à responsabilité limitée marocaine, fondée en mars 2024, spécialisée dans les solutions industrielles et numériques."
        />

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Company Info */}
          <div className={inView ? 'animate-slide-in-left' : 'opacity-0'} style={{ animationFillMode: 'forwards' }}>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-9">
              <h3 className="font-display text-[22px] font-bold text-white mb-5">Notre Identité</h3>
              <div className="space-y-4">
                {COMPANY_INFO.map(([label, val]) => (
                  <div key={label} className="flex justify-between pb-3 border-b border-white/5">
                    <span className="text-slate-400 text-sm">{label}</span>
                    <span className="text-white text-sm font-medium text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className={inView ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="font-display text-[22px] font-bold text-white mb-5">Nos Valeurs</h3>
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map((v, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 transition-all duration-300
                             hover:bg-accent/[0.06] hover:border-accent/20"
                >
                  <div className="text-accent mb-2.5">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {v.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />}
                      {v.icon === 'shield' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                      {v.icon === 'users' && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>}
                      {v.icon === 'cpu' && <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /></>}
                    </svg>
                  </div>
                  <div className="font-semibold text-[15px] mb-1">{v.label}</div>
                  <div className="text-[13px] text-slate-400 leading-snug">{v.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: `${projectCount}+`, label: 'Interventions' },
            { val: `${clientCount}+`, label: 'Clients Satisfaits' },
            { val: `${yearCount}+`, label: "Années d'Activité" },
            { val: '5', label: "Pôles d'Expertise" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-7 rounded-xl bg-accent/[0.04] border border-accent/[0.12] animate-pulse-glow"
            >
              <div className="font-display text-4xl font-extrabold text-accent">{stat.val}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
