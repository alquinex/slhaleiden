import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import links from '../components/Navbar/links'
import { Link } from 'gatsby'

const DropdownMenu = ({ toggle, isOpen }) => {
  return (
    <Wrapper isOpen={isOpen} onClick={toggle}>
      <CloseIconWrapper onClick={toggle}>
        <CloseIcon />
      </CloseIconWrapper>
      <DropdownWrapper>
        <DropdownMenus>
          {links.map((item, index) => (
            <MenuLinks key={index} item={item.path}>
              {item.text}
            </MenuLinks>
          ))}
        </DropdownMenus>
      </DropdownWrapper>
    </Wrapper>
  )
}

export default DropdownMenu

const Wrapper = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0080ff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const CloseIconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
`

const DropdownWrapper = styled.div`
  color: #fff;
`

const DropdownMenus = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`

const MenuLinks = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-transform: capitalize;

  &:hover {
    color: black;
  }
`
