"use client"

import Image from "next/image"
import Button from "../UI/Button/Button"
import { ReservedParkingArticle, ReservedParkingContainer, ReservedParkingImg, ReservedParkingText } from "./ReservedParking-style"
import Link from "next/link"

const ReservedParking = ()=>{
    return(
        <ReservedParkingContainer>
            <ReservedParkingArticle>
                <ReservedParkingText> ESTACIONAMIENTO RESERVADO CON EXITO!! </ReservedParkingText>
                <Link href="/"><Button text={"VOLVER AL INICIO"} /></Link>
                <ReservedParkingImg>
                    <Image src="/img/LogoOrange.png" alt="logo" width={190} height={190}/>
                </ReservedParkingImg>
            </ReservedParkingArticle>
        </ReservedParkingContainer>
    )
}

export default ReservedParking