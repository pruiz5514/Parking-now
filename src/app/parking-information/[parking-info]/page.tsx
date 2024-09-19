"use client"
import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import { ParkingInfoContainer, ParkingInfoTitle, ParkingInfoTitleContainer, StarsContainer } from "./parking-info-style";
import { IoStar } from "react-icons/io5";
import ParkingInfoCard from "app/components/ParkingInfoCard/ParkingInfoCard";

const ParkingInfo = () => {
    return (
        <>
            <Header>
                <li><Link href="/parkings">Inicio</Link></li>
                <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                <li> <Link href="/"><Button text={"Cerrar sesión"}/></Link></li>
            </Header>

            <ParkingInfoContainer>
                <ParkingInfoTitleContainer>
                    <ParkingInfoTitle>Unidad residencial Río Campestre</ParkingInfoTitle>
                    <StarsContainer><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></StarsContainer>
                </ParkingInfoTitleContainer>

                <ParkingInfoCard button={<Button text={"Ver más"}/>}/>
            </ParkingInfoContainer>
        </>
    )
}

export default ParkingInfo;