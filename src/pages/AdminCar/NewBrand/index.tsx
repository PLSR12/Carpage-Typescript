import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import api from '../../../services/api'

import ErrorMessage from '../../../components/ErrorMessage'

import { Container, Label, Input, ButtonStyle, LabelUpload } from './styles'

interface IBrand {
  name: string
  file: string
}

function NewBrand() {
  const [fileName, setFileName] = useState(null)
  const { push } = useHistory()

  const onSubmit = async (data: any) => {
    const brandDataFormData = new FormData()

    brandDataFormData.append('name', data.name)
    brandDataFormData.append('file', data.file[0])

    await toast.promise(api.post('brands', brandDataFormData), {
      success: 'Marca criada com sucesso',
      error: 'Falha ao criar a marca',
    })

    setTimeout(() => {
      push('/')
    }, 2000)
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    file: Yup.mixed().test('required', 'Carregue uma imagem', (value) => {
      return value && value.length > 0
    }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBrand>({ resolver: yupResolver(schema) })

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome:</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <div>
            <LabelUpload>
              {fileName || (
                <>
                  <CloudUploadIcon />
                  Caregue a imagem do marca
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

          <ButtonStyle type="submit"> Adicionar Marca </ButtonStyle>
        </div>
      </form>
    </Container>
  )
}

export default NewBrand
