'use client'
import { HeroStyled, Title, HeroContainer, HeroBackgroundOverlay } from "./hero-style"
import Button  from "../UI/Button/Button"
import Link from "next/link"

const Hero = () => {
    return (
        <HeroStyled>
            <HeroBackgroundOverlay/>
            <HeroContainer>
            <Title>Tu celda de parqueo a un click!!</Title>
            </HeroContainer>
        </HeroStyled>
    )
}

export default Hero