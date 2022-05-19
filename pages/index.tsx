import Header from '../components/Header'
import Layout from '../components/Layouts'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import About from '../components/About'
// import Testimonials from '../components/Testimonial'
import { m } from 'framer-motion'

const Home = () => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />

        <About />
        {/*<Skills />*/}
        <Experience />
        <Projects />
        {/*<Testimonials />*/}
        <Contact />
      </Layout>
    </>
  )
}

export default Home
