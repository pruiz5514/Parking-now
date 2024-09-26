"use client";
import Button from "app/components/UI/Button/Button"
import { MainStyle, Title, ContainerInfoContact, Span, TitleInfo, ContainerDeatails } from "./booking-style"
import Input from "app/components/UI/Input/Input"
import { FaAddressCard } from "react-icons/fa"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { errorAlert } from "app/utils/alerts"

const Booking: React.FC<{ params: { idSlots: string } }> = ({ params }) => {
    const { idSlots } = params;
    const [plateValue, setPlateValue] = useState('');
    const router = useRouter();
    
    const handleInputPlateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlateValue(event.target.value);
    };

    const handleReservation = () => {
        if (plateValue) {
            localStorage.setItem('vehicle_plate_booking', plateValue);
            router.push(`/parking-information/${idSlots}/reserved-parking`);
        } else {
            errorAlert("Por favor, ingrese la placa del vehículo antes de reservar.");
        }
    };

    return (
        <>
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
    );
};

export default Booking;
