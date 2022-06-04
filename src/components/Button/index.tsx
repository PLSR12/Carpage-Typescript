import React from 'react'

import { ComponentButton } from './styles'
import IButtonProps from './types'

export default function Button({ children, type, ...props }: IButtonProps) {
  return (
    <ComponentButton {...props} type="submit">
      {children}
    </ComponentButton>
  )
}
