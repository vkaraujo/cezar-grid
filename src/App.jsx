import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <header role="banner">
        <Navbar />
      </header>

      <main role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <ScrollToTop />

      <footer role="contentinfo">
        <Footer />
      </footer>
    </>
  )
}
