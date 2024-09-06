"use client"
import { IButton } from "app/types/IButton"
import { ButtonStyle } from "./Button-style";

const Button :React.FC<IButton> = ({text}) => {
    return(
        <ButtonStyle>{text}</ButtonStyle>
    )
}

export default Button;