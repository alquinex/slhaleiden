import React, { useState } from 'react'
import links from './links'
import { Link } from 'gatsby'
import Logo from './Logo'
import styled from 'styled-components'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-logo'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <ul className='nav-links'>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to='/'>{item.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  background: transparent;
  z-index: 1;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    list-style-type: none;
    height: 0;
    transition: all 0.3s linear;
    /* overflow: hidden; */
  }
  .nav-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
  }
`

export default Navbar
