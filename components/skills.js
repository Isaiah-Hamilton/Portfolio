import {
  Heading,
  Box,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Skills = () => {
  return (
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Skills
      </Heading>
      <Paragraph>
        I have a wide range of skills, ranging from frontend development to
        backend development.
      </Paragraph>
      <SimpleGrid m={'auto'} width={'fit-content'} columns={[1, 2, 3, 4]} spacingX={16}>
        <Box>
          <Image src='/images/html.svg' width={16} height={16} my={6} alt='html' />
        </Box>
        <Box>
          <Image src='/images/javascript.svg' width={16} height={16} my={6} alt='javascript' />
        </Box>
        <Box>
          <Image src='/images/typescript.svg' width={16} height={16} my={6} alt='typescript' />
        </Box>
        <Box>
          <Image src='/images/react.svg' width={16} height={16} my={6} alt='react' />
        </Box>
        <Box>
          <Image src='/images/next-js.svg' width={16} height={16} my={6} alt='next-js' />
        </Box>
        <Box>
          <Image src='/images/deno.svg' width={16} height={16} my={6} alt='deno' />
        </Box>
        <Box>
          <Image src='/images/graphql.svg' width={16} height={16} my={6} alt='graphql' />
        </Box>
        <Box>
          <Image src='/images/apollo-graphql.svg' width={16} height={16} my={6} alt='apollo-graphql' />
        </Box>
        <Box>
          <Image src='/images/flutter.svg' width={16} height={16} my={6} alt='flutter' />
        </Box>
        <Box>
          <Image src='/images/tailwindcss.svg' width={16} height={16} my={6} alt='tailwindcss' />
        </Box>
        <Box>
          <Image src='/images/python.svg' width={16} height={16} my={6} alt='python' />
        </Box>
        <Box>
          <Image src='/images/nodejs.svg' width={16} height={16} my={6} alt='node-js' />
        </Box>
      </SimpleGrid>
      <Box>
        <Box display={'block'} textAlign={'center'}>{new Date().getFullYear() - 2020}</Box>
        <Box display={'block'} textAlign={'center'}>
          Years <br /> experience
        </Box>
      </Box>
      <Paragraph>
        ⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications
      </Paragraph>
      <Paragraph>
        ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks
      </Paragraph>
      <Paragraph>
        ⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean
      </Paragraph>
    </Section>
  )
}

export default Skills