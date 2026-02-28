import { useState, useEffect } from 'react'
import { NAV_ITEMS, BRAND } from '../../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#accueil')} className="flex items-center gap-2.5 group" aria-label="Accueil">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center font-display font-extrabold text-navy text-base">
            IY
          </div>
          <div>
            <div className="font-display font-bold text-white text-[17px] leading-none tracking-wide">
              {BRAND.name}
            </div>
            <div className="text-[10px] text-slate-400 tracking-[2.5px] uppercase mt-px">SARL</div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-white/75 text-sm font-medium px-4 py-2 hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-navy/[0.98] backdrop-blur-xl border-b border-white/[0.06] px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left text-white/80 text-base py-3.5 border-b border-white/5 hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
