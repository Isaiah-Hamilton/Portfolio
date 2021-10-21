import {
  Heading,
  Box,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'
import Section from '../components/section'

const Skills = () => {
    return (
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <SimpleGrid m={'auto'} width={'fit-content'} columns={[1, 2, 3, 4]} spacingX={16}>
            <Box>
              <Image src='/images/html.svg' width={16} height={16} my={6} alt='html'/>
            </Box>
            <Box>
              <Image src='/images/javascript.svg' width={16} height={16} my={6} alt='javascript'/>
            </Box>
            <Box>
              <Image src='/images/typescript.svg' width={16} height={16} my={6} alt='typescript'/>
            </Box>
            <Box>
              <Image src='/images/react.svg' width={16} height={16} my={6} alt='react'/>
            </Box>
            <Box>
              <Image src='/images/next-js.svg' width={16} height={16} my={6} alt='next-js'/>
            </Box>
            <Box>
              <Image src='/images/deno.svg' width={16} height={16} my={6} alt='deno'/>
            </Box>
            <Box>
              <Image src='/images/graphql.svg' width={16} height={16} my={6} alt='graphql'/>
            </Box>
            <Box>
              <Image src='/images/apollo-graphql.svg' width={16} height={16} my={6} alt='apollo-graphql'/>
            </Box>
            <Box>
              <Image src='/images/flutter.svg' width={16} height={16} my={6} alt='flutter'/>
            </Box>
            <Box>
              <Image src='/images/tailwindcss.svg' width={16} height={16} my={6} alt='tailwindcss'/>
            </Box>
            <Box>
              <Image src='/images/python.svg' width={16} height={16} my={6} alt='python'/>
            </Box>
            <Box>
              <Image src='/images/nodejs.svg' width={16} height={16} my={6} alt='node-js'/>
            </Box>
          </SimpleGrid>
          <Box display={'flex'} justifyContent={'space-evenly'} my={4}>
            <Box>
              <Box display={'block'} textAlign={'center'}>{new Date().getFullYear() - 2016}</Box>
              <Box display={'block'} textAlign={'center'}>
                Years <br /> experience
              </Box>
            </Box>

            <Box>
              <Box display={'block'} textAlign={'center'}>7</Box>
              <Box display={'block'} textAlign={'center'}>
                Completed <br /> project
              </Box>
            </Box>

            <Box>
              <Box display={'block'} textAlign={'center'}>0</Box>
              <Box display={'block'} textAlign={'center'}>
                Companies <br /> worked
              </Box>
            </Box>
          </Box>
        </Section>
    )
}

export default Skills