import React from 'react'
import logo from '../../images/logo-white.png'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// const getLogo = graphql`
//   {
//     myLogo: allContentfulOrgLogo {
//       edges {
//         node {
//           logo {
//             fluid {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const Wrapper = styled.div`
//   margin: auto 0;
//   width: 50px;
// `

const Logo = () => {
  // const response = useStaticQuery(getLogo)
  // const res = response.myLogo.edges[0].node.logo
  return (
    <div>
      <img src={logo} width='100px' />
    </div>
  )
}

export default Logo
