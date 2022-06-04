import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../../services/api'

import ErrorMessage from '../../../components/ErrorMessage'

import {
  Container,
  Label,
  Input,
  ButtonStyle,
  LabelUpload,
  CloudUploadIconStyle,
} from './styles'
import IAllVehicles from '../../../models/IAllVehicles'

function EditTruck() {
  const [fileName, setFileName] = useState(null)
  const [brands, setBrands] = useState([])
  const {
    push,
    location: {
      state: { truck },
    },
  }: any = useHistory()

  const onSubmit = async (data: any) => {
    const truckDataFormData = new FormData()

    truckDataFormData.append('name', data.name)
    truckDataFormData.append('description', data.description)
    truckDataFormData.append('year', data.year)
    truckDataFormData.append('transmission', data.transmission)
    truckDataFormData.append('mileage', data.mileage)
    truckDataFormData.append('fuel', data.fuel)
    truckDataFormData.append('price', data.price)
    truckDataFormData.append('brand_id', data.brand.id)
    truckDataFormData.append('file', data.file[0])

    await toast.promise(api.put(`trucks/${truck.id}`, truckDataFormData), {
      success: 'Caminhão editado com sucesso',
      error: 'Falha ao editar o caminhão',
    })

    setTimeout(() => {
      push('/caminhoes/admin')
    }, 2000)
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    description: Yup.string().required('A descrição é obrigatória'),
    year: Yup.string().required('O ano é obrigatório'),
    transmission: Yup.string().required('O câmbio é obrigatório'),
    mileage: Yup.string().required('A quilometragem é obrigatório'),
    fuel: Yup.string().required('O combustível é obrigatório'),
    price: Yup.string().required('O preço é obrigátorio'),
    brand: Yup.object().required('Escolha uma marca'),
    file: Yup.mixed().test('required', 'Carregue uma imagem', (value) => {
      return value && value.length > 0
    }),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAllVehicles>({ resolver: yupResolver(schema) })

  useEffect(() => {
    async function loadBrands() {
      const { data }: any = await api.get('brands')

      let brandsTrucks = data.slice(12, 18)

      const newBrands: any = [...brandsTrucks]

      setBrands(newBrands)
    }
    loadBrands()
  }, [])

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome:</Label>
          <Input type="text" defaultValue={truck.name} {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Descrição:</Label>
          <textarea
            defaultValue={truck.description}
            {...register('description')}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Câmbio:</Label>
          <Input
            type="text"
            defaultValue={truck.transmission}
            {...register('transmission')}
          />
          <ErrorMessage>{errors.transmission?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Ano:</Label>
          <Input type="text" defaultValue={truck.year} {...register('year')} />
          <ErrorMessage>{errors.year?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Quilometragem:</Label>
          <Input
            type="text"
            defaultValue={truck.mileage}
            {...register('mileage')}
          />
          <ErrorMessage>{errors.mileage?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Combustível:</Label>
          <Input type="text" defaultValue={truck.fuel} {...register('fuel')} />
          <ErrorMessage>{errors.fuel?.message}</ErrorMessage>
        </div>
        <div>
          <Label> Preço </Label>
          <Input
            type="number"
            defaultValue={truck.price}
            {...register('price')}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIconStyle />
                Caregue a imagem do produto
              </>
            )}
            <input
              type="file"
              {...register('file')}
              onChange={(value: any): void => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            name="brand"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={brands}
                  getOptionLabel={(brd) => brd.name}
                  getOptionValue={(brd) => brd.id}
                  placeholder="Escolha uma marca"
                  defaultValue={truck.brand}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.brand?.message}</ErrorMessage>
        </div>
        <ButtonStyle type="submit"> Editar Caminhão </ButtonStyle>
      </form>
    </Container>
  )
}

export default EditTruck
