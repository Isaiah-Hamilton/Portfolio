import Header from '../components/Header'
import Layout from '../components/Layouts'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import About from '../components/About'

const Home = () => {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}

export default Home
