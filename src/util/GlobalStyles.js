import { createGlobalStyle } from 'styled-components'
import 'fontsource-open-sans'

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
  font-family: 'Open Sans', sans-serif
}

  
`
export default GlobalStyles
