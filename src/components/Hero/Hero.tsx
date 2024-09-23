'use client'
import { HeroStyled, Title, HeroContainer, HeroBackgroundOverlay, TitleContainer, VideoBackground, Video } from "./hero-style"

const Hero = () => {
    return (

        <VideoBackground>
            <HeroStyled>
            <HeroBackgroundOverlay />
                <Video autoPlay muted loop>
                    <source src="video/hero.mp4" type="video/mp4" />
                </Video>               
                <HeroContainer>
                    <TitleContainer>
                        <Title>PARKING NOW</Title>
                        <p>Tu vehículo, seguro y cerca de ti. </p>
                    </TitleContainer>
                </HeroContainer>
            </HeroStyled>
        </VideoBackground>


    )
}

export default Hero