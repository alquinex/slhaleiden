import React from 'react'
import styled from 'styled-components'
import Background from './Background'

const Hero = () => {
  return (
    <Wrapper>
      <Background>
        <article>
          <h1>Sierra Leone Humanitarian Association</h1>
          <h3>United We Stand Divide We Fall</h3>
        </article>
      </Background>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  margin-top: -110px;
  height: 100vh;

  article {
    /* width: 85vw; */
    max-width: 800px;
    color: #fff;
    text-align: center;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.25;
    margin: 2rem 0 3rem 0;
    letter-spacing: 0.1rem;
  }
`
