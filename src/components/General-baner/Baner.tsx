'use client'
import { BanerStyled, Title, BanerContainer ,BanerBackgroundOverlay } from "./baner-style"

interface InfoProps {
    id: string;
};

const Baner: React.FC<InfoProps> = ({ id }) => {
    return (
        <BanerStyled id={id}>
            <BanerBackgroundOverlay/>
            <BanerContainer>
            <Title>Encuentra tu espacio de estacionamiento sin complicaciones, facil y rápido</Title>
            </BanerContainer>
        </BanerStyled>
    )
}

export default Baner