import React from 'react'
import PropTypes from 'prop-types'

import { ErrorMessageStyles } from './styles'

export default function ErrorMessage({ children }: any) {
  return <ErrorMessageStyles> {children} </ErrorMessageStyles>
}

ErrorMessage.propTypes = {
  children: PropTypes.string,
}
