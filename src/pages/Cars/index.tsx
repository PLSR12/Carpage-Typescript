import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, BrandsMenu, BrandButton, CarsContainer } from './styles'

import CardCars from '../../components/CardCars'

import formatCurrency from '../../utils/formatCurrency'

import api from '../../services/api'

import IVehicles from '../../models/IVehicles'

interface CarPage {
  state: any
  brand: IVehicles
}

export default function Cars({ brand, state }: CarPage) {
  let brandId = 0
  if (state?.brandId) {
    brandId = state.brandId
  }

  const [brands, setBrands] = useState<any>([brandId])
  const [cars, setCars] = useState<any>([])

  useEffect(() => {
    async function loadBrands() {
      const { data }: any = await api.get('brands')
      let brandsCars = data.slice(0, 6)
      console.log(brandsCars)

      const newBrands = [{ id: 0, name: 'Todas' }, ...brandsCars]

      setBrands(newBrands)
    }
    async function loadCars() {
      const { data: allCars }: any = await api.get('cars')

      const newCars = allCars.map((car: { price: number | bigint }) => {
        return {
          ...car,
          formatedPrice: formatCurrency(car.price),
        }
      })

      setCars(newCars)
    }

    loadCars()
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
      <CarsContainer>
        {cars &&
          cars.map((car: { id: number }) => (
            <CardCars key={car.id} car={car} />
          ))}
      </CarsContainer>
    </Container>
  )
}

Cars.propTypes = {
  location: PropTypes.object,
}
