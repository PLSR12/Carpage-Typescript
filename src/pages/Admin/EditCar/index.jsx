import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../../services/api'

import ErrorMessage  from '../../../components/ErrorMessage'

import {
  Container,
  Label,
  Input,
  ButtonStyle,
  LabelUpload,
  CloudUploadIconStyle
} from './styles'

function EditCar () {
  const [fileName, setFileName] = useState(null)
  const [brands, setBrands] = useState([])
  const {
    push,
    location: {
      state: { car }
    }
  } = useHistory()

  const onSubmit = async data => {
    const carDataFormData = new FormData()

    carDataFormData.append('name', data.name)
    carDataFormData.append('description', data.description)
    carDataFormData.append('year', data.year)
    carDataFormData.append('transmission', data.transmission)
    carDataFormData.append('mileage', data.mileage)
    carDataFormData.append('fuel', data.fuel)
    carDataFormData.append('price', data.price)
    carDataFormData.append('brand_id', data.brand.id)
    carDataFormData.append('file', data.file[0])

    await toast.promise(api.put(`cars/${car.id}`, carDataFormData), {
      success: 'Carro alterado com sucesso',
      error: 'Falha ao alterar o carro'
    })

    setTimeout(() => {
      push('/admin-carros')
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
    file: Yup.mixed().test('required', 'Carregue uma imagem', value => {
      return value && value.length > 0
    })
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  useEffect(() => {
    async function loadBrands () {
      const { data } = await api.get('brands')

      let brandsCars = data.slice(0, 6)

      const newBrands = [...brandsCars]

      setBrands(newBrands)
    }
    loadBrands()
  }, [])

  return (
    <Container>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome:</Label>
          <Input type='text' defaultValue={car.name} {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Descrição:</Label>
          <textarea
            type='text'
            defaultValue={car.description}
            {...register('description')}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Câmbio:</Label>
          <Input
            type='text'
            defaultValue={car.transmission}
            {...register('transmission')}
          />
          <ErrorMessage>{errors.transmission?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Ano:</Label>
          <Input type='text' defaultValue={car.year} {...register('year')} />
          <ErrorMessage>{errors.year?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Quilometragem:</Label>
          <Input
            type='text'
            defaultValue={car.mileage}
            {...register('mileage')}
          />
          <ErrorMessage>{errors.mileage?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Combustível:</Label>
          <Input type='text' defaultValue={car.fuel} {...register('fuel')} />
          <ErrorMessage>{errors.fuel?.message}</ErrorMessage>
        </div>
        <div>
          <Label> Preço </Label>
          <Input
            type='number'
            defaultValue={car.price}
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
              type='file'
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            name='brand'
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={brands}
                  getOptionLabel={brd => brd.name}
                  getOptionValue={brd => brd.id}
                  placeholder='Escolha uma marca'
                  defaultValue={car.brand}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.brand?.message}</ErrorMessage>
        </div>
        <ButtonStyle type='submit'> Editar Carro </ButtonStyle>
      </form>
    </Container>
  )
}

export default EditCar
