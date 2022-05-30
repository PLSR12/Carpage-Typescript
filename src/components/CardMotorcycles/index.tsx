import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import AvTimerIcon from '@mui/icons-material/AvTimer'
import MediationIcon from '@mui/icons-material/Mediation'

import Button from '../Button'

import PropTypes from 'prop-types'

import {
  ContainerCard,
  MotoName,
  MotoDescription,
  ContainerImage,
  ContainerText,
  MotoPrice,
  Line,
} from './styles'

export default function CardMotorcycles({ moto }: any) {
  return (
    <ContainerCard>
      <ContainerImage>
        <img src={moto.url} alt="foto do carro"></img>
      </ContainerImage>
      <ContainerText>
        <MotoName> {moto.name} </MotoName>
        <MotoDescription> {moto.description}</MotoDescription>
        <div>
          <CalendarTodayIcon /> <p> {moto.year}</p>
          <MediationIcon />
          <p> {moto.transmission} </p>
          <AvTimerIcon />
          <p> {moto.mileage} Km </p>
          <LocalGasStationIcon />
          <p> {moto.fuel} </p>
        </div>
      </ContainerText>
      <Line> </Line>

      <div className="container-price">
        <MotoPrice> {moto.formatedPrice}</MotoPrice>
        <Button> Comprar Já </Button>
      </div>
    </ContainerCard>
  )
}

CardMotorcycles.propTypes = {
  moto: PropTypes.object,
}
