'use client'
import { HeroStyled, Title, HeroContainer, HeroBackgroundOverlay, TitleContainer } from "./Hero-style"
import { FaSearchLocation } from "react-icons/fa";


const Hero = () => {
    return (
        <HeroStyled>
            <HeroBackgroundOverlay/>
            <HeroContainer>
                <TitleContainer>
                <Title>PARKING NOW</Title>
                <p><FaSearchLocation />Tu vehículo, seguro y cerca de ti. </p>
                </TitleContainer>
            </HeroContainer>
        </HeroStyled>
    )
}

export default Hero