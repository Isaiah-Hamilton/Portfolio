import Head from 'next/head'
import type { NextPage } from 'next'
import Layout from '../components/Layouts'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Experience from '../components/Experience'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Isaiah Hamilton is a creative thinker and Full Stack Developer with experience in website design, front-end development, and back-end development."
        />
        <meta name="author" content="Isaiah Hamilton" />
        <meta name="author" content="Isaiah-Hamilton" />
        <meta name="author" content="Isaiah7Hamilton" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Isaiah7Hamilton" />
        <meta name="twitter:creator" content="@Isaiah7Hamilton" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Isaiah Hamilton | Full Stack Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Isaiah Hamilton | Full Stack Developer</title>
      </Head>
      <Layout>
        <Hero />
        <Experience />
        <Portfolio />
        <Contact />
      </Layout>
    </>
  )
}

export default Home
