import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../util/GlobalStyles'
import Navbar from '../components/Navbar/Navbar'
import Footer from './Footer'

const theme = {
  colors: {
    primary: '#0080FF',
  },
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <GlobalStyles />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
