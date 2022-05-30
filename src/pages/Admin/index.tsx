import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContainerItems } from './styles'

import ListCars from './ListCars'
import NewCar from './NewCar'
import EditCar from './EditCar'
import NewBrand from './NewBrand'

import SideMenuAdminCars from '../../components/SideMenuAdminCars'
import paths from '../../constants/paths'

export default function Admin({ match: { path } }: any) {
  return (
    <Container>
      <SideMenuAdminCars path={path} />
      <ContainerItems>
        {path === paths.Cars && <ListCars />}
        {path === paths.NewCar && <NewCar />}
        {path === paths.EditCar && <EditCar />}
        {path === paths.NewBrand && <NewBrand />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}
