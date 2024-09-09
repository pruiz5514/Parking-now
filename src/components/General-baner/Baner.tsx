'use client'
import { BanerStyled, Title, BanerContainer ,BanerBackgroundOverlay } from "./baner-style"

const Baner = () => {
    return (
        <BanerStyled>
            <BanerBackgroundOverlay/>
            <BanerContainer>
            <Title>Encuentra tu espacio de estacionamiento sin complicaciones, facil y rápido</Title>
            </BanerContainer>
        </BanerStyled>
    )
}

export default Baner