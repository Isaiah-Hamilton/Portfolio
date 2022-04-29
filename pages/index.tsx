import Header from '../components/Header'
import Layout from '../components/Layouts'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
// import Testimonials from '../components/Testimonial'

const Home = () => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <Skills />
        <Experience />
        <Portfolio />
        {/*<Testimonials />*/}
        <Contact />
      </Layout>
    </>
  )
}

export default Home
