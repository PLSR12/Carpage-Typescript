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

function ListTrucks() {
  const [trucks, setTrucks] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadTrucks() {
      const { data }: any = await api.get('trucks')
      setTrucks(data)
    }
    loadTrucks()
  }, [])

  function editTruck(truck: any) {
    push(paths.EditTruck, { truck })
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
            {trucks &&
              trucks.map((truck: any) => (
                <TableRow
                  key={truck.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {truck.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {truck.description}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {truck.transmission}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {truck.year}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {truck.mileage} Km
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {truck.fuel}
                  </TableCell>
                  <TableCell>{formatCurrency(truck.price)}</TableCell>
                  <TableCell>
                    <EditIconStyles onClick={() => editTruck(truck)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>{' '}
    </Container>
  )
}

export default ListTrucks
