import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}
