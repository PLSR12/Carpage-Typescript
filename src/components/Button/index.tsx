import React from 'react'

import { ComponentButton } from './styles'
import { IButtonProps } from './types'

export default function Button ({ children, ...props }: IButtonProps) {
  return <ComponentButton {...props}> {children} </ComponentButton>
}
