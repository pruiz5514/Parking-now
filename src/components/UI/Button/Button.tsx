"use client"
import { IButton } from "app/types/IButton"
import { ButtonStyle } from "./Button-style";

const Button :React.FC<IButton> = ({text, onClick, disabled }) => {
    return(
        <ButtonStyle onClick={onClick} disabled={disabled}>{text}</ButtonStyle>
    )
}

export default Button;