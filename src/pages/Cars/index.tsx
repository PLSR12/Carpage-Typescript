import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { Container, BrandsMenu, BrandButton, CarsContainer } from './styles'

import CardCars from '../../components/CardCars'

import formatCurrency from '../../utils/formatCurrency'

import api from '../../services/api'

export default function Cars({ state }: any) {
  let brandId = 0
  if (state?.brandId) {
    brandId = state.brandId
  }

  const [brands, setBrands] = useState([])
  const [cars, setCars] = useState<any>([])
  const [filteredCars, setFilteredCars] = useState<any>([])
  const [activeBrands, setActiveBrands] = useState<any>(brandId)

  useEffect(() => {
    async function loadBrands() {
      const { data }: any = await api.get('brands')

      let brandsCars = data.slice(0, 6)

      const newBrands: any = [{ id: 0, name: 'Todas' }, ...brandsCars]

      setBrands(newBrands)
    }
    async function loadCars() {
      const { data: allCars }: any = await api.get('cars')

      const newCars = allCars.map((car: any) => {
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

  useEffect(() => {
    if (activeBrands === 0) {
      setFilteredCars(cars)
    } else {
      const newFilteredCars = cars.filter(
        (car: { brand_id: any }) => car.brand_id === activeBrands
      )

      setFilteredCars(newFilteredCars)
    }
  }, [activeBrands, cars])

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
      <CarsContainer>
        {filteredCars &&
          filteredCars.map((car: { id: number }) => (
            <CardCars key={car.id} car={car} />
          ))}
      </CarsContainer>
    </Container>
  )
}

Cars.propTypes = {
  location: PropTypes.object,
}
