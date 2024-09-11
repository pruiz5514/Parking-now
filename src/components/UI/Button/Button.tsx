"use client"
import { IButton } from "app/types/IButton"
import { ButtonStyle } from "./Button-style";
import { BsType, BsTypeH3 } from "react-icons/bs";

const Button :React.FC<IButton> = ({text, type}) => {
    return(
        <ButtonStyle type={type}>{text}</ButtonStyle>
    )
}

export default Button;