import React from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import { Container, ItemContainer, ListLink } from './styles'
import listLinks from './menu-list'
import Logo from '../../assets/logo_super_carros.png'

export default function SideMenuAdminMotors({ path }) {
  const { push } = useHistory()
  return (
    <Container>
      <hr></hr>
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label} </ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer
        style={{ position: 'fixed', bottom: '30px' }}
      ></ItemContainer>
      <button onClick={() => push('/motos')}>
        <img src={Logo} alt="Logo" />
      </button>
    </Container>
  )
}

SideMenuAdminMotors.propTypes = {
  path: PropTypes.string,
}
