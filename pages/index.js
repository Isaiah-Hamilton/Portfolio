import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import {
  FiChevronRight
} from 'react-icons/fi'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Skills from '../components/skills'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={3} align='center'>
          Hello, I&apos;m a full-stack developer based in Atlanta.
        </Box>

        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-tittle'>
              Isaiah Hamilton
            </Heading>

            <p>
              ( Developer / Designer )
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="https://avatars.githubusercontent.com/u/70828596?v=4"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            I&apos;m a {new Date().getFullYear() - 2006}{' '}
            year old full-stack developer based in Atlanta
            with a passion for building digital services/stuff.
            I have a knack for all things launching products,
            from planning and designing all the way to solving real-life problems with code.
            When not online, I love skateboarding and hanging out with friends.
          </Paragraph>
          <Box align="center" my={6}>
            <NextLink href="/work">
              <Button rightIcon={<FiChevronRight />} backgroundColor="#6E57E0">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Skills />
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Get In Touch
          </Heading>
          <Paragraph>
            I&apos;m currently looking for internship Software Engineering opportunities!
            If you know of any positions available, if you have any questions,
            or if you want to get in touch, please email me down below.
          </Paragraph>
          <Box align="center" my={6}>
            <NextLink href='mailto:isaiah7hamilton@gmail.com'>
              <Button rightIcon={<FiChevronRight />} backgroundColor="#6E57E0">
                Contact Me
              </Button>
            </NextLink>
          </Box>
          {/* row of social media icons */}
          <Box display={{ md: 'flex' }} alignItems="center" justifyContent="center" mt={6}>
            <Box display={{ md: 'inline-block' }} mx={2}>
              <a href="https://twitter.com/isaiah7hamilton" target="_blank" rel="noopener noreferrer">
              </a>
            </Box>
            <Box display={{ md: 'inline-block' }} mx={2}>
              <a href="https://www.linkedin.com/in/isaiah-hamilton-b8a8b817b/" target="_blank" rel="noopener noreferrer">
              </a>
            </Box>
            <Box display={{ md: 'inline-block' }} mx={2}>
              <a href="https://www.linkedin.com/in/isaiah-hamilton-b8a8b817b/" target="_blank" rel="noopener noreferrer">
              </a>
            </Box>
            <Box display={{ md: 'inline-block' }} mx={2}>
              <a href="https://www.linkedin.com/in/isaiah-hamilton-b8a8b817b/" target="_blank" rel="noopener noreferrer">
              </a>
            </Box>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page