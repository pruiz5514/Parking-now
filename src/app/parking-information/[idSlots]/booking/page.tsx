"use client"
import Header from "app/components/Header/Header"
import Link from "next/link"
import Button from "app/components/UI/Button/Button"
import { MainStyle, Title, ContainerInfoContact, Span, TitleInfo, ContainerDeatails } from "./booking-style"
import Input from "app/components/UI/Input/Input"
import { FaAddressCard } from "react-icons/fa"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { errorAlert, successAlert } from "app/utils/alerts"
import Cookies from 'js-cookie';

const Booking: React.FC<{ params: { idSlots: string } }> = ({ params }) => {
    const { idSlots } = params;
    const cookieToken = Cookies.get("token");
    const [plateValue, setPlateValue] = useState('');
    const router = useRouter();

    const handleInputPlateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlateValue(event.target.value);
    };

    const handleReservation = () => {
        if (plateValue) {
            localStorage.setItem('vehicle_plate_booking', plateValue);
            // successAlert(`Placa del vehículo ${plateValue} guardada` );
            router.push(`/parking-information/${idSlots}/reserved-parking`);
        } else {
            errorAlert("Por favor, ingrese la placa del vehículo antes de reservar.");
        }
    };

    return (
        <>
            <Header>
                <li><Link href="/parkings">Inicio</Link></li>
                <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                <li><Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
            </Header>
            <MainStyle>
                <div>
                    <Title>Ingresa la placa del vehículo</Title>
                    <ContainerInfoContact>
                        <Input onChange={handleInputPlateChange} value={plateValue} name="vehicle_plate" id="userIdVehicle" type="text" placeholder="AXY78G" icon={FaAddressCard} required={true} maxLength={6}/>
                        <Button text={"Reservar ahora"} onClick={handleReservation} />
                    </ContainerInfoContact>
                </div>

                <ContainerDeatails>
                    <TitleInfo>Recuerda! Después de hacer la reserva, tienes <Span> 15 minutos</Span> para llegar al parqueadero. </TitleInfo>
                </ContainerDeatails>
            </MainStyle>
        </>
    )
}

export default Booking