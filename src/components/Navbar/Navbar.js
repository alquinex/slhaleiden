import React, { useState } from 'react'
import links from './links'
import { Link } from 'gatsby'
import Logo from './Logo'
import { GoThreeBars } from 'react-icons/go'
import styled from 'styled-components'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  return (
    <Wrapper>
      <div className='navbar-center'>
        <div className='navbar-header'>
          <Link to='/'>
            <Logo />
          </Link>
          <button type='button' className='toggle-button' onClick={toggleNav}>
            <GoThreeBars className='menu-icon' />
          </button>
        </div>
        <ul className='navbar-links'>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav``

export default Navbar
