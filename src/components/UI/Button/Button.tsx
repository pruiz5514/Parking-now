"use client"
import { IButton } from "app/types/IButton"
import { StyleButton } from "./Button-style";

const Button :React.FC<IButton> = ({text}) => {
    return(
        <StyleButton >{text}</StyleButton>
    )
}

export default Button;