"use client"

import Image from "next/image"
import Button from "../UI/Button/Button"
import { ReservedParkingArticle, ReservedParkingContainer, ReservedParkingImg, ReservedParkingText } from "./ReservedParking-style"

const ReservedParking = ()=>{
    return(
        <ReservedParkingContainer>
            <ReservedParkingArticle>
                <ReservedParkingText> ESTACIONAMIENTO RESERVADO CON EXITO!! </ReservedParkingText>
                <Button text={"VOLVER AL INICIO"} />
                <ReservedParkingImg>
                    <Image src="/img/NARANJA.png" alt="logo" width={190} height={190}/>
                </ReservedParkingImg>
            </ReservedParkingArticle>
        </ReservedParkingContainer>
    )
}

export default ReservedParking