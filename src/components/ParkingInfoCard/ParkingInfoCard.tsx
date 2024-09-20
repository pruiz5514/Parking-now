"use client";

import { ParkingInfoCardButton, ParkingInfoCardContainer, ParkingInfoCardImage, ParkingInfoCardImg, ParkingInfoCardP, ParkingInfoCardPrice, ParkingInfoCardText } from "./ParkingInfoCard-style";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import React from "react";

interface ParkingInfoCardProps {
    button?: React.ReactNode;
}

const ParkingInfoCard: React.FC<ParkingInfoCardProps> = ({button}) => {
    return (
        <ParkingInfoCardContainer>
            <ParkingInfoCardImg>
                <ParkingInfoCardImage alt="Parking" style={{ borderRadius: '12px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8iuO1ZC9QClTFd3AGgHhzrPqBQJezDT1Wg&s" />
            </ParkingInfoCardImg>
            <ParkingInfoCardText>
                <p>Ubicado en una zona segura y de fácil acceso, este parqueadero cuenta con vigilancia 24/7 y cámaras de seguridad, brindando tranquilidad y protección para tu vehículo. Se encuentra dentro de una moderna unidad residencial que ofrece acceso controlado, permitiéndote entrar y salir con facilidad a través de un sistema de portería con vigilancia.</p>
                <ParkingInfoCardP> <FaLocationDot /> Barrio Robledo</ParkingInfoCardP>
                <ParkingInfoCardP> <GiHomeGarage /> Parqueadero cubierto</ParkingInfoCardP>
                <ParkingInfoCardButton>
                    <ParkingInfoCardPrice>$ 3000/Hora</ParkingInfoCardPrice>
                    <Link href="./booking">{button}</Link>
                </ParkingInfoCardButton>
            </ParkingInfoCardText>

        </ParkingInfoCardContainer>
    )
}

export default ParkingInfoCard;