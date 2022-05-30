import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import paths from '../../../constants/paths'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { Container, EditIconStyles } from './styles'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'

function ListCars () {
  const [cars, setCars] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadCars () {
      const { data } = await api.get('Cars')
      setCars(data)
    }
    loadCars()
  }, [])

  function editCar (car) {
    push(paths.EditCar, { car })
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Câmbio</TableCell>
              <TableCell>Ano</TableCell>
              <TableCell>Quilometragem</TableCell>
              <TableCell>Combustível</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars &&
              cars.map(car => (
                <TableRow
                  key={car.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {car.name}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {car.description}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {car.transmission}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {car.year}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {car.mileage} Km
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {car.fuel}
                  </TableCell>
                  <TableCell>{formatCurrency(car.price)}</TableCell>
                  <TableCell>
                    <EditIconStyles onClick={() => editCar(car)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>{' '}
    </Container>
  )
}

export default ListCars
