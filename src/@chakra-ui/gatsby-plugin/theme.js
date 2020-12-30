import { extendTheme } from '@chakra-ui/react'

import styles from './global'

const theme = extendTheme({
  styles,
  colors: {
    primary: '#0080FF',
    secondary: '#1BB631',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
})

export default theme
