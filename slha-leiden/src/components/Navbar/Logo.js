import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const getLogo = graphql`
  {
    myLogo: allContentfulOrgLogo {
      edges {
        node {
          logo {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  margin: auto 0;
  width: 80px;
`

const Logo = () => {
  const response = useStaticQuery(getLogo)
  const res = response.myLogo.edges[0].node.logo
  return (
    <Wrapper>
      <Img fluid={res.fluid} />
    </Wrapper>
  )
}

export default Logo
