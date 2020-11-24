import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'space-between'};
  height: 100%;
`

export default StyledFlex
