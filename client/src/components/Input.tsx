import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: String,
    type: String
}

const Input = ({placeholder, type}: InputProps) => {
  return (
    <input placeholder={placeholder} type={type} className="input" />
  )
}

export default Input