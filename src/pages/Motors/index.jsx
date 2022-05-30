import { React, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, BrandsMenu, BrandButton, MotorsContainer } from './styles'

import CardMotorcycles from '../../components/CardMotorcycles'

import formatCurrency from '../../utils/formatCurrency'

import api from '../../services/api'

export default function Motorcycles({ location: { state } }) {
  let brandId = 0
  if (state?.brandId) {
    brandId = state.brandId
  }

  const [brands, setBrands] = useState([])
  const [motorcycles, setMotorcycles] = useState([])
  const [filteredMotorcycles, setFilteredMotorcycles] = useState([])
  const [activeBrands, setActiveBrands] = useState(brandId)

  useEffect(() => {
    async function loadBrands() {
      const { data } = await api.get('brands')

      let brandsMotors = data.slice(6, 12)

      const newBrands = [{ id: 0, name: 'Todas' }, ...brandsMotors]

      setBrands(newBrands)
    }
    async function loadMotorcycles() {
      const { data: allMotorcycles } = await api.get('motors')

      const newMotorcycles = allMotorcycles.map((moto) => {
        return {
          ...moto,
          formatedPrice: formatCurrency(moto.price),
        }
      })

      setMotorcycles(newMotorcycles)
    }

    loadMotorcycles()
    loadBrands()
  }, [])

  useEffect(() => {
    if (activeBrands === 0) {
      setFilteredMotorcycles(motorcycles)
    } else {
      const newFilteredMotorcycles = motorcycles.filter(
        (moto) => moto.brand_id === activeBrands
      )

      setFilteredMotorcycles(newFilteredMotorcycles)
    }
  }, [activeBrands, motorcycles])
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
      <MotorsContainer>
        {filteredMotorcycles &&
          filteredMotorcycles.map((moto) => (
            <CardMotorcycles key={moto.id} moto={moto} />
          ))}
      </MotorsContainer>
    </Container>
  )
}

Motorcycles.propTypes = {
  location: PropTypes.object,
}
