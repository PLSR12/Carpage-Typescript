import { ReactNode } from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

import { Body, Container, ContainerPage } from './styles'

export default function Layout ({ children }: { children: ReactNode }) {
  return (
    <Container>
      <ContainerPage>
        <Header />
        <Banner />
        <Body>{children}</Body>
        <Footer/>
      </ContainerPage>
    </Container>
  )
}
