import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layouts'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <Layout hideFooter>
      <Hero />
    </Layout>
  )
}

export default Home
