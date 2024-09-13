"use client"

import Image from "next/image"
import Button from "../../components/UI/Button/Button";
import { ReservedParkingArticle, ReservedParkingContainer, ReservedParkingImg, ReservedParkingText, ContainerCronometro } from "./ReservedParking-style"
import Link from "next/link"

const ReservedParking = () => {
    return (
        <ReservedParkingContainer>
            <ReservedParkingArticle>
                <ReservedParkingText>HAZ CLICK PARA ACTIVAR TU RESERVA</ReservedParkingText>
                <ContainerCronometro>
                <p>Te quedan:</p>
                <ReservedParkingText>05:01</ReservedParkingText>
                </ContainerCronometro>
                <Link href="/"><Button text={"INICIAR"} /></Link>
                <ReservedParkingImg>
                    <Image src="/img/LogoOrange.png" alt="logo" width={190} height={190} />
                </ReservedParkingImg>
            </ReservedParkingArticle>
        </ReservedParkingContainer>
    )
}

export default ReservedParking