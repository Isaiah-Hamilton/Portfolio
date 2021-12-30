import type { NextPage } from 'next'
import Layout from '../components/Layouts'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Portfolio />
    </Layout>
  )
}

export default Home
