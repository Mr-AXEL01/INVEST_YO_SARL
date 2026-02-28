import { useInView } from '../../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView(0.1)

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="accueil"
      ref={ref}
      className="grain-overlay relative min-h-screen flex items-center bg-gradient-to-br from-navy via-deep-blue to-steel overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.06)_0%,transparent_70%)] pointer-events-none animate-float" />
      <div className="absolute bottom-[15%] -left-[5%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(30,58,95,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-20 relative z-[2] w-full">
        <div className="max-w-[720px]">
          {inView && (
            <>
              <div className="animate-fade-in-up opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold tracking-[2px] uppercase mb-6">
                  Depuis 2024 · M'Rirt, Maroc
                </span>
              </div>

              <h1 className="font-display text-[clamp(36px,5.5vw,68px)] font-extrabold leading-[1.08] mb-6 animate-fade-in-up opacity-0 [animation-delay:0.25s] [animation-fill-mode:forwards]">
                Solutions
                <br />
                <span className="text-accent">Industrielles</span> &<br />
                Numériques
              </h1>

              <p className="text-[clamp(16px,1.8vw,19px)] text-slate-400 leading-relaxed max-w-[540px] mb-10 animate-fade-in-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
                INVEST YO SARL accompagne les professionnels et institutions avec des prestations d'excellence en
                électromécanique, construction métallique, logistique et développement digital.
              </p>

              <div className="flex gap-4 flex-wrap animate-fade-in-up opacity-0 [animation-delay:0.55s] [animation-fill-mode:forwards]">
                <button className="btn-primary" onClick={() => scrollTo('#services')}>
                  Nos Services <span className="ml-2">→</span>
                </button>
                <button className="btn-outline" onClick={() => scrollTo('#contact')}>
                  Contactez-nous
                </button>
              </div>
            </>
          )}
        </div>

        {/* Stats */}
        {inView && (
          <div className="flex gap-8 mt-20 flex-wrap animate-fade-in-up opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards]">
            {[
              { val: '5+', label: "Domaines d'expertise" },
              { val: '100%', label: 'Engagement qualité' },
              { val: '24/7', label: 'Support technique' },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-accent/40 pl-4">
                <div className="font-display text-[28px] font-bold text-accent">{s.val}</div>
                <div className="text-[13px] text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
