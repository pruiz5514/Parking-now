"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { errorAlert, successAlert } from "app/utils/alerts";
import { IEndBooking, IEndBookingResponse } from "app/types/IBooking";
import { endBooking, terminateBooking } from "app/services/booking";
import Cookies from 'js-cookie';
import Button from "app/components/UI/Button/Button";
import { ButtonWrapper,  CardContainer,  CardContent, DivButtonContainer, H2Card, PCard, PriceCard } from "./Card-pay-booking-style";
import { ReservedParkingArticle, ReservedParkingContainer, ReservedParkingImg } from "../../ReservedParking-style";
import Image from "next/image";



const PayReservedParking: React.FC<{ params: { bookingId: string, idSlots: string } }> = ({ params }) => {
    const { bookingId, idSlots } = params;
    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState<number>()
    const [totalHours, setTotalHours] = useState<number>()
    const router = useRouter();
    const cookieToken = Cookies.get("token");

    const handleInitiate = async () => {

        if (cookieToken) {
            const endbookingData: IEndBooking = {
                end_date_time: new Date().toISOString(),
                booking_id: bookingId
            };
            setIsLoading(true);
            try {
                const response: IEndBookingResponse = await endBooking(endbookingData, cookieToken);
                console.log('Respuesta completa del backend:', response);

                if (response.data) {
                    setAmount(response.data.amount);
                    setTotalHours(response.data.totalHours);
                    console.log("este es amount", setAmount, "este es total", setTotalHours);
                    successAlert("Reserva finalizada, por favor confirma o cancela.");
                    router.push(`/parking-information/${idSlots}/reserved-parking/${bookingId}/pay-terminate-reserved`);
                }
            } catch (error) {
                errorAlert("Error al iniciar la reserva: " + (error as Error).message);
            } finally {
                setIsLoading(false);
            }
        }

    };
    const handleConfirm = async () => {
        if (cookieToken) {
            setIsLoading(true);
            try {
                const response = await terminateBooking(cookieToken); // Llamar al endpoint terminateBooking
                successAlert("Reserva terminada con éxito.");
                router.push(`/parkings`);
            } catch (error) {
                errorAlert("Error al terminar la reserva: " + (error as Error).message);
            } finally {
                setIsLoading(false);
            }
        }
    };
    const handleCancel = () => {
        errorAlert("tu reserva seguirá.");
        router.push(`/parking-information/${idSlots}/reserved-parking/${bookingId}/end-reserved`);
    };
    useEffect(() => {
        handleInitiate();
    }, []);
    return (
        <ReservedParkingContainer>
            <ReservedParkingArticle>
                <ReservedParkingImg>
                    <Image src="/img/LogoOrange.png" alt="logo" width={190} height={190} />
                </ReservedParkingImg>
                <CardContainer>
                    <CardContent>
                        <H2Card>Factura de Reserva</H2Card>
                        <PCard>Total horas: {totalHours !== undefined ? totalHours : 'Cargando...'}</PCard>
                        <PriceCard>Total a pagar: ${amount !== undefined ? amount : 'Cargando...'}</PriceCard>
                        <DivButtonContainer>
                            <ButtonWrapper>
                                <Button text="Confirmar" onClick={handleConfirm} />
                            </ButtonWrapper>
                            <ButtonWrapper>
                                <Button text="Cancelar" onClick={handleCancel} />
                            </ButtonWrapper>
                        </DivButtonContainer>
                    </CardContent>
                </CardContainer>
            </ReservedParkingArticle>
        </ReservedParkingContainer>
    )
}

export default PayReservedParking