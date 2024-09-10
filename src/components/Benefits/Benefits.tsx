'use client'
import { BenefitsStyled, ContainerBenefits, Title, BenefitsList,CheckIconStyled } from "./Benefits-style"

interface BenefitsProps {
    id: string;
};

const Benefits: React.FC<BenefitsProps> = ({ id }) => {
    return (
        <BenefitsStyled id={id}>
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