import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from '../ui/ScrollToTop'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-navy text-white font-body overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  )
}
