'use client'
import { PropsWithChildren } from "react"
import { FooterStyle, Title, ContainerLogo } from "./footer-style";
import Image from "next/image";

const Footer= ({ children  }: PropsWithChildren) => {
    return (
        <FooterStyle>
            <ContainerLogo>
            <Image src="/img/LOGO2.png" alt="logo-principal" width={100} height={100} />
            <Title>Parking now - facil y rapido</Title>
            </ContainerLogo>
        </FooterStyle>
    )
}

export default Footer