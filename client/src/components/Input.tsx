import { FC } from 'react'
import { InputProps } from "../models/inputModel"

const Input: FC<InputProps> = ({ placeholder, type }): JSX.Element => {
  return (
    <input placeholder={placeholder} type={type} className="input" />
  )
}

export default Input