import React from 'react'
import { Box } from '@chakra-ui/react'

const Container = ({ children, fluid, ...rest }) => {
  return (
    <Box maxW={fluid ? '1320px' : '1140px'} px='16px' mx='auto' {...rest}>
      {children}
    </Box>
  )
}

export default Container
