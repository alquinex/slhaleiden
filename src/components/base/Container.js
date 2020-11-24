import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: ${(props) => (props.fluid ? 'none' : '1200px')};
`

export default Container
