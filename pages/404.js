import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container maxW="md" mx="auto" mt="40px" px="10px">
        <Box>
            <Heading as="h1" align='center'>Page Not Found</Heading>
            <Text align='center'>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Box>
    </Container>
  )
}

export default NotFound