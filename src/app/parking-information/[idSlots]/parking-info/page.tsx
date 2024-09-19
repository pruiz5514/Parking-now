"use client"
import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import { ParkingInfoContainer, ParkingInfoTitle, ParkingInfoTitleContainer, StarsContainer } from "./parking-info-style";
import { IoStar } from "react-icons/io5";
import ParkingInfoCard from "app/components/ParkingInfoCard/ParkingInfoCard";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { getSlotById, getSlots } from "app/services/slots";
import { errorAlert } from "app/utils/alerts";
import { ISlots } from "app/types/IParking";


const ParkingInfo: React.FC<{ params: { idSlots: string } }> = ({ params }) => {
    const { idSlots } = params;
    console.log("idslot", idSlots);
    const [slots, setSlots] = useState([]);
    const cookieToken = Cookies.get("token");
    

    
    // const cookieToken = Cookies.get("token");

    // const [slotbyid, setSlot] = useState([]);

    // useEffect(()=>{
    //     const fetchSlotById = async()=>{
    //         try{
    //             if(cookieToken){
    //                 const slotData = await getSlotById(cookieToken, idSlot);
    //                 setSlot(slotData);
    //             }
    //         }
    //         catch(e){
    //             console.log(e);
    //             errorAlert("No se pudo obtener la información del slot, intente mas tarde");
    //         }
    //     }
    //     fetchSlotById();
    // },[])

    // const karina = async () => {
    //     try {
    //         if (cookieToken) {
    //             const slotData = await getSlotById(cookieToken, idSlots);
    //             console.log("hola", slotData);
    //         }
    //     }
    //     catch (e) {
    //         console.log(e);
    //         errorAlert("No se pudo obtener la información del slot, intente mas tarde");
    //     }
    // }
    // karina()



    return (
        <>
            <Header>
                <li><Link href="/parkings">Inicio</Link></li>
                <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                <li> <Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
            </Header>

            <ParkingInfoContainer>
                <ParkingInfoTitleContainer>
                    <ParkingInfoTitle>Unidad residencial Río Campestre</ParkingInfoTitle>
                    <StarsContainer><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></StarsContainer>
                </ParkingInfoTitleContainer>

                {/* <ParkingInfoCard slot ={slotbyid} href={`/bookings}`} button={<Button text={"Ver más"}/>}/> */}
            </ParkingInfoContainer>
        </>
    )
}

export default ParkingInfo;