import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, BrandsMenu, BrandButton, TrucksContainer } from './styles'

import CardTrucks from '../../components/CardTrucks'

import formatCurrency from '../../utils/formatCurrency'

import api from '../../services/api'

export default function Trucks({ state }: any) {
  let brandId = 0
  if (state?.brandId) {
    brandId = state.brandId
  }

  const [brands, setBrands] = useState([])
  const [trucks, setTrucks] = useState([])
  const [filteredTrucks, setFilteredTrucks] = useState([])
  const [activeBrands, setActiveBrands] = useState(brandId)

  useEffect(() => {
    async function loadBrands() {
      const { data }: any = await api.get('brands')

      let brandsCars = data.slice(12, 18)

      const newBrands: any = [{ id: 0, name: 'Todas' }, ...brandsCars]

      setBrands(newBrands)
    }
    async function loadTrucks() {
      const { data: allTrucks }: any = await api.get('trucks')

      const newTrucks = allTrucks.map((truck: any) => {
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

  useEffect(() => {
    if (activeBrands === 0) {
      setFilteredTrucks(trucks)
    } else {
      const newFilteredTrucks = trucks.filter(
        (truck: { brand_id: any }) => truck.brand_id === activeBrands
      )

      setFilteredTrucks(newFilteredTrucks)
    }
  }, [activeBrands, trucks])

  return (
    <Container>
      <BrandsMenu>
        {brands &&
          brands.map((brand: { id: any; name: string }) => (
            <BrandButton
              type="button"
              key={brand.id}
              isActiveBrand={activeBrands === brand.id}
              onClick={() => {
                setActiveBrands(brand.id)
              }}
            >
              {brand.name}
            </BrandButton>
          ))}
      </BrandsMenu>
      <TrucksContainer>
        {filteredTrucks &&
          filteredTrucks.map((truck: { id: number }) => (
            <CardTrucks key={truck.id} truck={truck} />
          ))}
      </TrucksContainer>
    </Container>
  )
}

Trucks.propTypes = {
  location: PropTypes.object,
}
