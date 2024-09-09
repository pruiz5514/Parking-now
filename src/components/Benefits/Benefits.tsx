'use client'
import { BenefitsStyled, ContainerBenefits, Title, BenefitsList,CheckIconStyled } from "./Benefits-style"

const Benefits = () => {
    return (
        <BenefitsStyled>
            <ContainerBenefits>
                <Title>Beneficios</Title>

                <BenefitsList>
                    <div>
                        <p><CheckIconStyled/>Lorem...</p>
                        <p><CheckIconStyled/>Lorem...</p>
                        <p><CheckIconStyled/>Lorem...</p>
                    </div>
                    <div>
                        <p><CheckIconStyled/>Lorem...</p>
                        <p><CheckIconStyled/>Lorem...</p>
                        <p><CheckIconStyled/>Lorem...</p>
                    </div>
                </BenefitsList>
            </ContainerBenefits>
        </BenefitsStyled>
    )
}

export default Benefits