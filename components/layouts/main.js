import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Isaiah Hamilton is a creative thinker and Full-Stack Developer with experience in website design, front-end development, back-end development, and user interface design.169 characters" />
                <meta name="author" content="Isaiah Hamilton" />
                <meta name="author" content="Isaiah-Hamilton" />
                <meta name="author" content="Isaiah7Hamilton" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Isaiah7Hamilton" />
                <meta name="twitter:creator" content="@Isaiah7Hamilton" />
                <meta name="twitter:image" content="/card.png" />
                <meta property="og:site_name" content="Isaiah Hamilton | Full-Stack Developer" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />
                <title>Isaiah Hamilton | Full-Stack Developer</title>
            </Head>
            <Script src="https://kit.fontawesome.com/a223b19e18.js" crossorigin="anonymous"></Script>

            <Navbar path={router.asPath} />

            <Container maxW='container.mb' pt={14} >
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
