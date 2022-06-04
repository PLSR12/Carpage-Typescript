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

  const [brands, setBrands] = useState<any>([brandId])
  const [motorcycles, setMotorcycles] = useState<any>([])

  useEffect(() => {
    async function loadBrands() {
      const { data }: any = await api.get('brands')

      let brandsMotors = data.slice(6, 12)
      console.log(brandsMotors)

      const newBrands = [{ id: 0, name: 'Todas' }, ...brandsMotors]

      setBrands(newBrands)
    }
    async function loadMotorcycles() {
      const { data: allMotorcycles }: any = await api.get('motors')

      const newMotorcycles = allMotorcycles.map(
        (moto: { price: number | bigint }) => {
          return {
            ...moto,
            formatedPrice: formatCurrency(moto.price),
          }
        }
      )

      setMotorcycles(newMotorcycles)
    }

    loadMotorcycles()
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
      <MotorsContainer>
        {motorcycles &&
          motorcycles.map((moto: { id: number }) => (
            <CardMotorcycles key={moto.id} moto={moto} />
          ))}
      </MotorsContainer>
    </Container>
  )
}

Motorcycles.propTypes = {
  location: PropTypes.object,
}
