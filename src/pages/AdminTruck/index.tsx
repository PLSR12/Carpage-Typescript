import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContainerItems } from './styles'

import ListTrucks from './ListTrucks'
import NewTruck from './NewTruck'
import EditTruck from './EditTruck'

import SideMenuAdminTrucks from '../../components/SideMenuAdminTrucks'
import paths from '../../constants/paths'

export default function AdminTrucks({ match: { path } }: any) {
  return (
    <Container>
      <SideMenuAdminTrucks path={path} />
      <ContainerItems>
        {path === paths.Trucks && <ListTrucks />}
        {path === paths.NewTruck && <NewTruck />}
        {path === paths.EditTruck && <EditTruck />}
      </ContainerItems>
    </Container>
  )
}

AdminTrucks.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}
