import React, { useState } from 'react'
import links from './links'
import { Link } from 'gatsby'
import Logo from './Logo'
import { GoThreeBars } from 'react-icons/go'
import styled from 'styled-components'
import StyledFlex from '../base/StyledFlex'
import Container from '../base/Container'

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: var(--color-primary);
`

// const PrimaryButton = styled.button``

// const SecondaryButton = styled.button``

// const StyledDynamicButton = styled.button`
//   background-color: ${(props) => {
//     if (props.variant === 'primary') return `var(--color-primary)`

//     if (props.variant === 'secondary') return props.theme.colors.secondary

//     return 'gray'
//   }};

//   color: ${(props) => `var(--color-${props.variant})`};

//   color: ${({ variant, theme }) => theme.colors[variant] || 'gray'};

//   padding: ${(props) => (props.size === 'lg' ? '30px' : props.size === 'md' ? '15px' : '5px')};
//   font-size: ${({ size }) => (size === 'lg' ? '24px' : size === 'md' ? '18px' : '14px')};
// `

const NavWrapper = styled.div`
  background-color: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  color: ${(props) => props.theme.colors.primaryColor};
`

const StyledNavbar = styled.nav`
  display: flex;

  & > a {
    display: block;
    text-decoration: none;
    padding: 1rem 1.25rem;
    text-transform: capitalize;
    font-weight: bold;
    color: ${(props) => props.theme.colors.mainBlack};
  }

  & > a:hover {
    border-bottom: ${(props) => props.theme.colors.primaryColor} 1.5 px solid;
  }

  & > div {
    padding: 0.5rem 0.75rem;
    color: ${(props) => props.theme.colors.primaryColor};
  }

  & > button {
    display: none;
    color: ${(props) => props.theme.colors.primaryColor};
    width: 2rem;
  }

  @media only screen and (max-width: 600px) {
    & > a {
      display: ${(props) => (props.isOpen ? 'block' : 'none')};
    }

    & > button {
      display: flex;
      background: transparent;
      border: none;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      cursor: pointer;

      & > button:hover {
        color: green;
      }
    }
  }
`

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  return (
    <NavWrapper>
      <Container>
        <StyledFlex>
          <div>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <StyledNavbar isOpen={isOpen}>
            {links.map((item, index) => {
              return (
                <Link key={index} to={item.path}>
                  {item.text}
                </Link>
              )
            })}
            <button type='button' onClick={toggleNav}>
              <GoThreeBars />
            </button>
          </StyledNavbar>
        </StyledFlex>
      </Container>
    </NavWrapper>
  )
}

export default Navbar
