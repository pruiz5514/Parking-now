'use client'
import { HeroStyled, Title, HeroContainer, HeroBackgroundOverlay } from "./hero-style"
import Button  from "../UI/Button/Button"

const Hero = () => {
    return (
        <HeroStyled>
            <HeroBackgroundOverlay/>
            <HeroContainer>
            <Title>Tu celda de parqueo a un click!!</Title>
            <Button text={"Iniciar Sesión"}/>
            </HeroContainer>
        </HeroStyled>
    )
}

export default Hero