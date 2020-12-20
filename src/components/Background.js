import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`
  {
    hero: allContentfulHeroImage {
      edges {
        node {
          heroImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const StyledBackgroundImage = styled(BackgroundImage)`
  min-height: 100vh;
  display: grid;
  position: relative;
  z-index: 998;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
  }
`

const Background = ({ className, children }) => {
  const response = useStaticQuery(getImage)
  const myHero = response.hero.edges[0].node.heroImage.fluid

  return (
    // <Wrapper>
    <StyledBackgroundImage Tag='div' fluid={myHero} className={className}>
      {children}
    </StyledBackgroundImage>
    // </Wrapper>
  )
}

export default Background

// const Wrapper = styled.section`
//   min-height: 100vh;
//   display: grid;
//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.4);
//     z-index: 999;
//   }
// `
