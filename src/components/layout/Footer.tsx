import { BRAND, NAV_ITEMS } from '../../utils/constants'

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 bg-[#050D1A] pt-12 pb-6 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center font-display font-extrabold text-navy text-sm">
                IY
              </div>
              <div>
                <div className="font-display font-bold text-white text-[15px] leading-none tracking-wide">{BRAND.name}</div>
                <div className="text-[9px] text-slate-400 tracking-[2px] uppercase mt-px">SARL</div>
              </div>
            </div>
            <p className="text-slate-500 text-[13px] max-w-[280px] leading-relaxed">
              Solutions industrielles et numériques d'excellence au service des professionnels et institutions marocaines.
            </p>
          </div>

          <div className="flex gap-12 flex-wrap">
            {/* Navigation */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 tracking-[1.5px] uppercase mb-3">Navigation</h4>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="block text-slate-500 text-sm py-1 hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 tracking-[1.5px] uppercase mb-3">Contact</h4>
              <div className="text-slate-500 text-sm leading-8">
                <div>{BRAND.phone}</div>
                <div>{BRAND.email}</div>
                <div className="max-w-[200px]">{BRAND.address}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-5 flex flex-wrap justify-between gap-2">
          <p className="text-slate-600 text-[13px]">
            © 2024–{new Date().getFullYear()} {BRAND.legal}. Tous droits réservés.
          </p>
          <p className="text-slate-600 text-[13px]">M'Rirt – Khénifra, Maroc</p>
        </div>
      </div>
    </footer>
  )
}
