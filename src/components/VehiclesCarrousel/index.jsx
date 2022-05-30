import React, { useEffect, useState } from 'react'

import { Container, ContainerItems, Image } from './styles'

import Carousel from 'react-elastic-carousel'

import api from '../../services/api'

export default function VehiclesCarrousel() {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    async function loadBrands() {
      const { data } = await api.get('brands')

      setBrands(data)
    }

    loadBrands()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ]

  return (
    <Container>
      <h1> Nossos Parceiros </h1>

      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {brands &&
          brands.map((brands) => (
            <ContainerItems key={brands.id}>
              <Image src={brands.url} alt="foto da marca" />
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
