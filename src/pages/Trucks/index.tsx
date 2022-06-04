import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, BrandsMenu, BrandButton, TrucksContainer } from './styles'

import CardTrucks from '../../components/CardTrucks'

import formatCurrency from '../../utils/formatCurrency'

import api from '../../services/api'

import IVehicles from '../../models/IVehicles'

interface TrucksPage {
  state: any
  brand: IVehicles
}

export default function Trucks({ brand, state }: TrucksPage) {
  let brandId = 0
  if (state?.brandId) {
    brandId = state.brandId
  }

  const [brands, setBrands] = useState<any>([brandId])
  const [trucks, setTrucks] = useState<any>([])

  useEffect(() => {
    async function loadBrands() {
      const { data }: any = await api.get('brands')

      let brandsTrucks = data.slice(12, 20)
      console.log(brandsTrucks)

      const newBrands: any = [{ id: 0, name: 'Todas' }, ...brandsTrucks]

      setBrands(newBrands)
    }
    async function loadTrucks() {
      const { data: allTrucks }: any = await api.get('trucks')

      const newTrucks = allTrucks.map((truck: { price: number | bigint }) => {
        return {
          ...truck,
          formatedPrice: formatCurrency(truck.price),
        }
      })

      setTrucks(newTrucks)
    }

    loadTrucks()
    loadBrands()
  }, [])

  return (
    <Container>
      <BrandsMenu>
        {brands &&
          brands.map((brand: { id: number; name: string }) => (
            <BrandButton type="button" key={brand.id}>
              {brand.name}
            </BrandButton>
          ))}
      </BrandsMenu>
      <TrucksContainer>
        {trucks &&
          trucks.map((truck: { id: number }) => (
            <CardTrucks key={truck.id} truck={truck} />
          ))}
      </TrucksContainer>
    </Container>
  )
}

Trucks.propTypes = {
  location: PropTypes.object,
}
