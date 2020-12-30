import React from 'react'
import { Flex, Box } from '@chakra-ui/react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <Flex flexDir='column' w='full' minH='100vh'>
      <Header />
      <Box minH='calc(100vh - 70px)' mt='70px' flex={1}>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
