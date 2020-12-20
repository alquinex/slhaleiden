import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Hero from '../components/Hero'

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.primaryColor};
`

export default function Home() {
  return (
    <Layout>
      <Hero />
      <H1>SLHA Leiden</H1>
    </Layout>
  )
}
