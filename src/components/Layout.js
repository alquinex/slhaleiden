import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../util/GlobalStyles'
import Navbar from '../components/Navbar/Navbar'
import Footer from './Footer'

const theme = {
  colors: {
    primaryColor: '#0080FF',
    mainWhite: '#fff',
    mainBlack: '#333',
    lightBlack: '#ccc',
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
