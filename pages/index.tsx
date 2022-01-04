import type { NextPage } from 'next'
import Layout from '../components/Layouts'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export default Home
