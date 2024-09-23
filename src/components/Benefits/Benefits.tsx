'use client'
import Image from "next/image";
import { Title, BenefitsList, ContainerImage } from "./Benefits-style"
import { FaCheck } from "react-icons/fa";


interface BenefitsProps {
    id: string;
};

const Benefits: React.FC<BenefitsProps> = ({ id }) => {
    return (
        <BenefitsList id={id}>
            <div>
                <Title>PROPÓSITO</Title>
                <p>El propósito de la aplicación Parking Now es optimizar la experiencia de estacionamiento al facilitar la búsqueda, reserva de espacios de parqueo de manera eficiente, segura y conveniente para los conductores, al mismo tiempo que maximiza la utilización y rentabilidad de los espacios de estacionamiento.
                </p>
            </div>
            <ContainerImage>
                <Image src="/img/image1.png" alt="logo" width={300} height={300} />
            </ContainerImage>
            <div>
                <Title>BENEFICIOS</Title>
                <p><FaCheck />Encuentra estacionamiento rápidamente.</p>
                <p><FaCheck />Reserva espacios en tiempo real.</p>
                <p><FaCheck />Genera ingresos alquilando tu parqueadero.</p>
                <p><FaCheck />Ahorra tiempo y evita el estrés.</p>
                <p><FaCheck />Elige entre varias opciones de estacionamiento.</p>
                <p><FaCheck />Disfruta de seguridad y confianza.</p>
            </div>
        </BenefitsList>
    )
}

export default Benefits