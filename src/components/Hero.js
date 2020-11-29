import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Banner from './Banner'
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

const Hero = ({ className }) => {
  const response = useStaticQuery(getImage)
  const myHero = response.hero.edges[0].node.heroImage.fluid

  return (
    <BackgroundImage fluid={myHero} className={className}>
      <Banner
        title='sierra leone humanitarian association leiden'
        motto='united we stand divided we fall'
      ></Banner>
    </BackgroundImage>
  )
}

export default Hero
