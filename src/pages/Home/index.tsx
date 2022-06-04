import React from 'react'

import { Container, ContainerInfo } from './styles'

import SimpleAccordion from '../../components/SimpleAccordion'
import VehiclesCarrousel from '../../components/VehiclesCarrousel'

export default function Home() {
  return (
    <Container>
      <ContainerInfo>
        <h1> Sobre Nós </h1>
        <p>
          {' '}
          A Internet e os serviços por ela oferecidos já fazem parte de nossas
          vidas e vieram para ficar. É sabido que as empresas que não estão
          presentes na Web de uma forma planejada e eficiente, deixaram de ser
          competitivas diante da concorrência do mercado globalizado. Sabemos
          que o modelo de comércio tradicional (de balcão) continuará a existir
          sempre, mas reflitamos um pouco: no mundo atual, onde a falta de tempo
          é uma constante na vida de todas as pessoas, a tendência natural do
          cliente será a de privilegiar cada vez mais quem lhe oferecer produtos
          e serviços 24 horas por dia, mantendo-o na comodidade e segurança de
          sua empresa ou de seu lar, livre dos congestionamentos, da violência
          urbana, das filas e de outros inconvenientes da vida moderna. A
          Internet proporciona tudo isso e a SuperCarros.com.br quer ampliar
          ainda mais suas fronteiras digitais. Somos uma equipe altamente
          qualificada composta por dezenas de profissionais nas áreas de
          Programação, Design, Prospecção, Atendimento ao Cliente, Web Business,
          Marketing e Gestão Empresarial. Nosso objetivo é levar a praticidade
          para dentro de sua casa ou trabalho, para que seus sonhos e projetos
          se realizem mais rápido e da melhor forma possível.
        </p>
      </ContainerInfo>
      <SimpleAccordion />
      <VehiclesCarrousel />
    </Container>
  )
}
