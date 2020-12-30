import { Box, Flex, Image, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

import Container from '@/components/shared/container'

import logoFull from '@/images/logo-full.png'
import logo from '@/images/logo.png'

const Header = () => {
  const logoSrc = useBreakpointValue([logo, logoFull])
  return (
    <Box boxShadow='md'>
      <Container fluid>
        <Flex py={4}>
          <Image src={logoSrc} h='64px' />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
