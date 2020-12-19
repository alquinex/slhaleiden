import React, { useState } from 'react'
import links from './links'
import { Link } from 'gatsby'
import Logo from './Logo'
import { GoThreeBars } from 'react-icons/go'
import styled from 'styled-components'
import StyledFlex from '../base/StyledFlex'
import Container from '../base/Container'

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      <Bars onClick={toggle} />
      <NavMenu>
        {links.map((item, index) => (
          <NavLink key={index} to={item.path}>
            {item.text}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #0080ff;
  padding: 0.5rem calc((100vw-1300px) / 2);
  position: relative;
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  text-transform: capitalize;
  cursor: pointer;
`

const Bars = styled(GoThreeBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
