import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border-width: ${({ variant }) => (variant === 'outline' ? '2px' : 'none')};
`

const Button = ({ icon, children }) => {
  return (
    <StyledButton variant='outline'>
      {icon && <div>{icon}</div>}
      {children}
    </StyledButton>
  )
}

;<Button icon={<FaEnvelope />}>Click</Button>

export default Button
