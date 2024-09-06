"use client"
import Image from "next/image";
import Button from "../UI/Button/Button";
import { PropsWithChildren } from "react";
import { HeaderNav, HeaderSection, HeaderStyle, HeaderUl } from "./Header-style";


const Header = ({ children  }: PropsWithChildren) => {
    return(
        <HeaderStyle>
            <HeaderSection>
                <a href="/"><Image src="/img/LOGO1.png" alt="logo-principal" width={140} height={140}/></a> 
            </HeaderSection>
            <HeaderNav>
                <HeaderUl>
                    <li> <a href="">Inicio</a> </li>
                    <li> <a href="">Beneficios</a> </li>
                    <li> <a href="">Información</a> </li>
                    <li> <a href="">Contactanos</a> </li>
                    <li> <Button text={"Registrate"} /> </li>
                    <li> <Button text={"Iniciar sesión"} /></li>
                </HeaderUl>
            </HeaderNav>
        </HeaderStyle>
    )
}
 export default Header;