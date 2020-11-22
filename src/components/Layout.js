import React from 'react'
import GlobalStyles from '../util/GlobalStyles'
import Navbar from '../components/Navbar/Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <GlobalStyles />
      {children}
      <Footer />
    </>
  )
}

export default Layout
