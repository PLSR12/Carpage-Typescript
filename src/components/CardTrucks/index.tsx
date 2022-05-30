import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import AvTimerIcon from '@mui/icons-material/AvTimer'
import MediationIcon from '@mui/icons-material/Mediation'

import PropTypes from 'prop-types'

import Button from '../Button'

import {
  ContainerCard,
  TruckName,
  TruckDescription,
  ContainerImage,
  ContainerText,
  TruckPrice,
  Line,
} from './styles'

export default function CardTrucks({ truck }: any) {
  return (
    <ContainerCard>
      <ContainerImage>
        <img src={truck.url} alt="foto do carro"></img>
      </ContainerImage>
      <ContainerText>
        <TruckName> {truck.name} </TruckName>
        <TruckDescription> {truck.description}</TruckDescription>
        <div>
          <CalendarTodayIcon /> <p> {truck.year}</p>
          <MediationIcon />
          <p> {truck.transmission} </p>
          <AvTimerIcon />
          <p> {truck.mileage} Km </p>
          <LocalGasStationIcon />
          <p> {truck.fuel} </p>
        </div>
      </ContainerText>
      <Line> </Line>

      <div className="container-price">
        <TruckPrice> {truck.formatedPrice}</TruckPrice>
        <Button> Comprar Já </Button>
      </div>
    </ContainerCard>
  )
}

CardTrucks.propTypes = {
  truck: PropTypes.object,
}
