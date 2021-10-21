import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
        <p>coded with Love by Isaiah Hamilton</p>
        &copy; {new Date().getFullYear()} Isaiah Hamilton. All Rights Reserved.
    </Box>
  )
}

export default Footer