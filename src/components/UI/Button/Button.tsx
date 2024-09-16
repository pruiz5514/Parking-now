"use client"
import { IButton } from "app/types/IButton"
import { ButtonStyle } from "./Button-style";
import { types } from "util";

const Button :React.FC<IButton> = ({text, onClick }) => {
    return(
        <ButtonStyle onClick={onClick}>{text}</ButtonStyle>
    )
}

export default Button;