import { InputHTMLAttributes } from "react"


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string
    onChange: (e:any) => void
    name: string
    placeholder: string
    type: string
}