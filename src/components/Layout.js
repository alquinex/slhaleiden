import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../util/GlobalStyles'
import Navbar from '../components/Navbar/Navbar'
import Footer from './Footer'
import DropdownMenu from './DropdownMenu'

const theme = {
  colors: {
    primaryColor: '#0080FF',
    mainWhite: '#fff',
    mainBlack: '#333',
    lightBlack: '#ccc',
  },
}

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <DropdownMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <GlobalStyles />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
