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

function ListMotors() {
  const [motors, setMotors] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadMotors() {
      const { data }: any = await api.get('motors')
      setMotors(data)
    }
    loadMotors()
  }, [])

  function editMotors(moto: any) {
    push(paths.EditMotor, { moto })
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
            {motors &&
              motors.map((moto: any) => (
                <TableRow
                  key={moto.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {moto.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {moto.description}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {moto.transmission}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {moto.year}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {moto.mileage} Km
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {moto.fuel}
                  </TableCell>
                  <TableCell>{formatCurrency(moto.price)}</TableCell>
                  <TableCell>
                    <EditIconStyles onClick={() => editMotors(moto)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>{' '}
    </Container>
  )
}

export default ListMotors
