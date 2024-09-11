'use client'
import { HeroStyled, Title, HeroContainer, HeroBackgroundOverlay } from "./hero-style"

const Hero = () => {
    return (
        <HeroStyled>
            <HeroBackgroundOverlay/>
            <HeroContainer>
            <Title>Tu celda a un click!!</Title>
            </HeroContainer>
        </HeroStyled>
    )
}

export default Hero