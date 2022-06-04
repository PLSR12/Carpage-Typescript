import React from 'react'
import PropTypes from 'prop-types'

import { Container, ContainerItems } from './styles'

import ListMotors from './ListMotors'
import NewMotors from './NewMotor'
import EditMotor from './EditMotor'

import SideMenuAdminMotors from '../../components/SideMenuAdminMotors'
import paths from '../../constants/paths'

export default function AdminMotors({ match: { path } }: any) {
  return (
    <Container>
      <SideMenuAdminMotors path={path} />
      <ContainerItems>
        {path === paths.Motors && <ListMotors />}
        {path === paths.NewMotor && <NewMotors />}
        {path === paths.EditMotor && <EditMotor />}
      </ContainerItems>
    </Container>
  )
}


SideMenuAdminMotors.propTypes = {
  path: PropTypes.string,
}

