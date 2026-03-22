import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Services     from './components/Services'
import About        from './components/About'
import Process      from './components/Process'
import Testimonials from './components/Testimonials'
import CTABanner    from './components/CTABanner'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </>
  )
}
