import { FC } from 'react'
import { InputProps } from "../models/inputModel"

const Input: FC<InputProps> = ({value, onChange, name, placeholder, type }): JSX.Element => {
  return (
    <input value={value} onChange={onChange} name={name} placeholder={placeholder} type={type} className="input" />
  )
}

export default Input