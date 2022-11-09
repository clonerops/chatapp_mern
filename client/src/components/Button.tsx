import { FC } from 'react'
import { ButtonModel } from "../models/buttonModel"


const Button: FC<ButtonModel> = ({ title }): JSX.Element => {
    return (
        <button className="button">{title}</button>
    )
}

export default Button