import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, BrandsMenu, BrandButton, MotorsContainer } from './styles'

import CardMotorcycles from '../../components/CardMotorcycles'

import formatCurrency from '../../utils/formatCurrency'

import api from '../../services/api'

export default function Motorcycles({ state }: any) {
  let brandId = 0
  if (state?.brandId) {
    brandId = state.brandId
  }

  const [brands, setBrands] = useState([])
  const [motorcycles, setMotorcycles] = useState<any>([])
  const [filteredMotorcycles, setFilteredMotorcycles] = useState<any>([])
  const [activeBrands, setActiveBrands] = useState<any>(brandId)

  useEffect(() => {
    async function loadBrands() {
      const { data }: any = await api.get('brands')

      let brandsMotors = data.slice(6, 12)

      const newBrands: any = [{ id: 0, name: 'Todas' }, ...brandsMotors]

      setBrands(newBrands)
    }
    async function loadMotorcycles() {
      const { data: allMotorcycles }: any = await api.get('motors')

      const newMotorcycles = allMotorcycles.map((moto: any) => {
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
        (moto: { brand_id: any }) => moto.brand_id === activeBrands
      )

      setFilteredMotorcycles(newFilteredMotorcycles)
    }
  }, [activeBrands, motorcycles])

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
      <MotorsContainer>
        {filteredMotorcycles &&
          filteredMotorcycles.map((moto: { id: number }) => (
            <CardMotorcycles key={moto.id} moto={moto} />
          ))}
      </MotorsContainer>
    </Container>
  )
}

Motorcycles.propTypes = {
  location: PropTypes.object,
}
