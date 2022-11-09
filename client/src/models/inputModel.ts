import { InputHTMLAttributes } from "react"


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    type: string
}