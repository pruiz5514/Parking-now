'use client'
import Image from "next/image";
import { Title, BenefitsList, CheckIconStyled } from "./Benefits-style"

interface BenefitsProps {
    id: string;
};

const Benefits: React.FC<BenefitsProps> = ({ id }) => {
    return (
            <BenefitsList id={id}>
                <div>
                    <Title>BENEFICIOS</Title>
                    <p><CheckIconStyled />Encuentra estacionamiento rápidamente.</p>
                    <p><CheckIconStyled />Reserva espacios en tiempo real.</p>
                    <p><CheckIconStyled />Genera ingresos alquilando tu parqueadero.</p>
                    <p><CheckIconStyled />Ahorra tiempo y evita el estrés.</p>
                    <p><CheckIconStyled />Elige entre varias opciones de estacionamiento.</p>
                    <p><CheckIconStyled />Disfruta de seguridad y confianza.</p>
                    <p><CheckIconStyled />Gestiona tus reservas fácilmente. </p>
                </div>
                <div>
                    <Image src="/img/image1.png" alt="logo" width={300} height={300} />
                </div>
            </BenefitsList>
    )
}

export default Benefits