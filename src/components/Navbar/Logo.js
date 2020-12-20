import React from 'react'
import logo from '../../images/logo-white.png'

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
  return (
    <div>
      <img src={logo} width='100px' alt='org-logo' />
    </div>
  )
}

export default Logo
