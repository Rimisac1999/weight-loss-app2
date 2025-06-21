import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 sm:pt-28">
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
} 