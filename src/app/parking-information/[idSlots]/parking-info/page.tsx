"use client"
import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import { ParkingInfoContainer, ParkingInfoTitle, ParkingInfoTitleContainer, StarsContainer } from "./parking-info-style";
import { IoStar } from "react-icons/io5";
import ParkingInfoCard from "app/components/ParkingInfoCard/ParkingInfoCard";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { getSlotById } from "app/services/slots";
import { errorAlert } from "app/utils/alerts";


const ParkingInfo :React.FC<{ params: { idSlots: string } }> = ({ params })  => {
    // const router = useRouter();
    const { idSlots } = params;
    console.log("idslot",idSlots);
    
    const cookieToken = Cookies.get("token");

    const [slot, setSlots] = useState([]);

    useEffect(()=>{
        const fetchSlotById = async()=>{
            try{
                if(cookieToken){
                    setSlots(await getSlotById(cookieToken,idSlots));
                }
            }
            catch(e){
                console.log(e);
                errorAlert("No se pudo obtener la información del slot, intente mas tarde");
            }
        }
        fetchSlotById();
    },[])

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

                {/* <ParkingInfoCard  key={slot.id} href={`/bookings/${slot.id}`} button={<Button text={"Ver más"}/>}/> */}
            </ParkingInfoContainer>
        </>
    )
}

export default ParkingInfo;