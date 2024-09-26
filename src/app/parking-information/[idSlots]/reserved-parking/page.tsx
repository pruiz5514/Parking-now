"use client"

import Image from "next/image"
import Button from "../../../../components/UI/Button/Button";
import { ReservedParkingArticle, ReservedParkingContainer, ReservedParkingImg, ReservedParkingText, ContainerCronometro, ReservedAddress } from "./ReservedParking-style"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { errorAlert, successAlert } from "app/utils/alerts";
import { ICreateBooking } from "app/types/IBooking";
import { createBooking } from "app/services/booking";
import Cookies from 'js-cookie';
import { Span } from "../booking/booking-style";
import { getSlotById } from "app/services/slots";
import { ISlots } from "app/types/IParking";


const ReservedParking: React.FC<{ params: { idSlots: string } }> = ({ params }) => {
    const { idSlots } = params;
    const [timeLeft, setTimeLeft] = useState(15 * 60);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const cookieToken = Cookies.get("token");
    const [slotInfo, setSlotInfo] = useState<ISlots | null>(null);

    useEffect(() => {
        const fetchSlotInfo = async () => {
            if (cookieToken) {
                try {
                    const data = await getSlotById(cookieToken, idSlots);
                    setSlotInfo(data); 
                } catch (error) {
                    errorAlert((error as Error).message);
                }
            }
        };

        fetchSlotInfo();
    }, [cookieToken, idSlots]);

    useEffect(() => {
        if (timeLeft <= 0) {
            handleTimeOut();
            return;
        }

        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleTimeOut = () => {
        errorAlert("El tiempo de pre-reserva ha expirado.");
        router.push('/parkings');
    };

    const handleInitiate = async () => {

        if (cookieToken) {
            const vehiclePlate = localStorage.getItem('vehicle_plate_booking');
            if (!vehiclePlate) {
                errorAlert("No se encontró la placa del vehículo.");
                return;
            }
            const bookingData: ICreateBooking = {
                start_date_time: new Date().toISOString(),
                vehicle_plate: vehiclePlate,
                slot_id: idSlots
            };
            setIsLoading(true);
            try {
                const response = await createBooking(bookingData, cookieToken);
                if (response.data.id) {
                    const bookingId = response.data.id;
                    successAlert("Reserva iniciada");
                    router.push(`/parking-information/${idSlots}/reserved-parking/${bookingId}/end-reserved`);
                }
            } catch (error) {
                errorAlert((error as Error).message);
                
            } finally {
                setIsLoading(false);
            }
        }

    };

    return (
        <ReservedParkingContainer>
            <ReservedParkingArticle>
                <ReservedParkingText>HAZ CLICK PARA ACTIVAR TU RESERVA</ReservedParkingText>
                {slotInfo && (
                    <div>
                        <ReservedAddress>Dirección del parqueadero</ReservedAddress>
                        <ReservedAddress>{slotInfo.property.commune.name} {slotInfo.property.address}</ReservedAddress>
                    </div>
                )}
                <ContainerCronometro>
                    <Span>Te quedan:</Span>
                    <ReservedParkingText>{formatTime(timeLeft)}</ReservedParkingText>
                </ContainerCronometro>
                <Button text={isLoading ? "CREANDO RESERVA..." : "ACTIVAR"} onClick={handleInitiate} disabled={isLoading || timeLeft <= 0} />
                <ReservedParkingImg>
                    <Image src="/img/LogoOrange.png" alt="logo" width={190} height={190} />
                </ReservedParkingImg>
            </ReservedParkingArticle>
        </ReservedParkingContainer>
    )
}

export default ReservedParking