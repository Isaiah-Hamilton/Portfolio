import Head from 'next/head'

const Header = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Isaiah Hamilton a creative thinker and Frontend Developer with experience in website design."
      />
      <meta name="author" content="Isaiah Hamilton" />
      <meta name="author" content="Isaiah-Hamilton" />
      <meta name="author" content="Isaiah7Hamilton" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Isaiah7Hamilton" />
      <meta name="twitter:creator" content="@Isaiah7Hamilton" />
      <meta name="twitter:image" content="/portfolio.png" />
      <meta property="og:site_name" content="Isaiah Hamilton | Frontend Developer" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/portfolio.png" />
      <title>Isaiah Hamilton | Frontend Developer</title>
    </Head>
  )
}

export default Header
