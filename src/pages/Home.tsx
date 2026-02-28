import { Helmet } from 'react-helmet-async'
import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Strengths from '../components/sections/Strengths'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>INVEST YO SARL | Solutions Industrielles & Numériques – M'Rirt, Maroc</title>
        <meta
          name="description"
          content="INVEST YO SARL, société marocaine spécialisée en électromécanique, construction métallique, logistique et développement de solutions numériques."
        />
      </Helmet>
      <main>
        <Hero />
        <Services />
        <About />
        <Strengths />
        <Contact />
      </main>
    </Layout>
  )
}
