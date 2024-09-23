"use client"

import Image from "next/image"
import { ReservedParkingArticle, ReservedParkingContainer, ReservedParkingImg, ReservedParkingText, ContainerCronometro } from "../../ReservedParking-style"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { errorAlert, successAlert } from "app/utils/alerts";
import { ICreateBooking, IEndBooking } from "app/types/IBooking";
import { createBooking, endBooking } from "app/services/booking";
import Cookies from 'js-cookie';
import Button from "app/components/UI/Button/Button";
import { Span } from "../../../booking/booking-style";


const EndReservedParking: React.FC<{ params: { bookingId: string, idSlots: string } }> = ({ params }) => {
    const { bookingId, idSlots } = params;
    const [isLoading, setIsLoading] = useState(false);
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
                const response = await endBooking(endbookingData, cookieToken);
                if (response.data.id) {
                    const bookingId = response.data.id;
                    // successAlert("Reserva finalizada, por favor dale terminar ");
                    // router.push(`/parking-information/${idSlots}/reserved-parking/${bookingId}/pay-terminate-reserved`);
                }
            } catch (error) {
                errorAlert("Error al iniciar la reserva: " + (error as Error).message);
            } finally {
                setIsLoading(false);
            }
        }

    };

    return (
        <ReservedParkingContainer>
            <ReservedParkingArticle>
                <ReservedParkingText>HAZ CLICK PARA FINALIZAR TU RESERVA</ReservedParkingText>
                <ContainerCronometro>
                    <ReservedParkingText></ReservedParkingText>
                </ContainerCronometro>
                <Link href={`/parking-information/${idSlots}/reserved-parking/${bookingId}/pay-terminate-reserved`}><Button text={isLoading ? "FINALIZANDO RESERVA..." : "FINALIZAR"} onClick={handleInitiate} disabled={isLoading} /></Link>
                <ReservedParkingImg>
                    <Image src="/img/LogoOrange.png" alt="logo" width={190} height={190} />
                </ReservedParkingImg>
            </ReservedParkingArticle>
            {/* <CardPayBooking amount={22680} totalHours={5.4} onConfirm={() => console.log('Confirmed')} onCancel={() => console.log('Cancelled')} /> */}
        </ReservedParkingContainer>
    )
}

export default EndReservedParking