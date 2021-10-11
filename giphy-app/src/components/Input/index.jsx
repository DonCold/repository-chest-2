import React from 'react'

import { Input } from './styles';

const InputComponent = ({ children, ...props }) => {
  return (
    <Input { ...props }>
      { children }
    </Input>
  )
}

export default InputComponent;
