import { React, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, BrandsMenu, BrandButton, TrucksContainer } from './styles'

import CardTrucks from '../../components/CardTrucks'

import formatCurrency from '../../utils/formatCurrency'

import api from '../../services/api'

export default function Trucks({ location: { state } }) {
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
      const { data } = await api.get('brands')

      let brandsTrucks = data.slice(12, 20)

      const newBrands = [{ id: 0, name: 'Todas' }, ...brandsTrucks]

      setBrands(newBrands)
    }
    async function loadTrucks() {
      const { data: allTrucks } = await api.get('trucks')

      const newTrucks = allTrucks.map((truck) => {
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
        (truck) => truck.brand_id === activeBrands
      )

      setFilteredTrucks(newFilteredTrucks)
    }
  }, [activeBrands, trucks])
  return (
    <Container>
      <BrandsMenu>
        {brands &&
          brands.map((brand) => (
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
          filteredTrucks.map((truck) => (
            <CardTrucks key={truck.id} truck={truck} />
          ))}
      </TrucksContainer>
    </Container>
  )
}

Trucks.propTypes = {
  location: PropTypes.object,
}
