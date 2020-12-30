/* eslint-disable max-lines-per-function */
import React from 'react'
import Layout from '@/components/layout/layout'
import Seo from '@/components/layout/seo'
import Container from '@/components/shared/container'
import { Heading } from '@chakra-ui/react'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title='Home' />
      <Container>
        <Heading color='primary'>Index Page</Heading>
      </Container>
    </Layout>
  )
}

export default IndexPage
