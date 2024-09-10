"use client"

import Footer from "app/components/Footer/Footer";
import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import { ParkingInfoContainer, ParkingInfoTitle, StarsContainer } from "./parking-info-style";
import { IoStar } from "react-icons/io5";
import ParkingInfoCard from "app/components/ParkingInfoCard/ParkingInfoCard";

const ParkingInfo = ()=> {
    return(
        <>
            <Header>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="./register-parking">Publicar parqueadero</Link></li>
                <li> <Link href="/sign-in"><Button text={"Cerrar sesión"}/></Link></li>
            </Header>

            <ParkingInfoContainer>
                <ParkingInfoTitle>Unidad residencial Río Campestre</ParkingInfoTitle>
                <StarsContainer><IoStar/><IoStar /><IoStar /><IoStar /><IoStar /></StarsContainer>
                <ParkingInfoCard/>
            </ParkingInfoContainer>

            <Footer/>
        </>
    )
}

export default ParkingInfo;