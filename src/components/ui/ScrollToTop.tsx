import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-hover
                 flex items-center justify-center text-navy shadow-[0_8px_30px_rgba(245,158,11,0.3)]
                 z-50 hover:-translate-y-1 transition-transform"
      aria-label="Retour en haut"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
