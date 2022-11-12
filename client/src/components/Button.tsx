import { FC } from 'react'
import { ButtonModel } from "../models/buttonModel"


const Button: FC<ButtonModel> = ({onClick, title }): JSX.Element => {
    return (
        <button onClick={onClick} className="button">{title}</button>
    )
}

export default Button