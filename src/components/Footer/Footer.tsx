'use client'
import { PropsWithChildren } from "react"
import { FooterStyled, Title, ContainerLogo, ContainerSocialMedia,TitleCoppyRight, ContainerInfo, FacebookStyled, WhatsappStyled, InstagramStyled } from "./footer-style";
import Image from "next/image";
import Link from "next/link";

const Footer= ({ children  }: PropsWithChildren) => {
    return (
        <FooterStyled>
            <ContainerLogo>
            <Image src="/img/LOGO3.png" alt="logo-principal" width={100} height={100} />
            <Title>Parking now - facil y rapido</Title>
            </ContainerLogo>
            <ContainerInfo>
            <TitleCoppyRight>© Copyright 2024 Todos los derechos reservados</TitleCoppyRight>
            <ContainerSocialMedia>
                <Link href="https://web.facebook.com/" target="_blanck"><FacebookStyled /></Link>
                <Link href="https://web.whatsapp.com/" target="_blanck"><WhatsappStyled /></Link>
                <Link href="https://www.instagram.com/" target="_blanck"><InstagramStyled /></Link>
            </ContainerSocialMedia>
            </ContainerInfo>
        </FooterStyled>
    )
}

export default Footer