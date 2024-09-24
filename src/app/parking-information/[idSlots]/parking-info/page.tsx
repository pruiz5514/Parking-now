"use client"
import { useEffect, useState } from "react";
import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import { ParkingInfoContainer, ParkingInfoTitle, ParkingInfoTitleContainer, StarsContainer } from "./parking-info-style";
import { IoStar } from "react-icons/io5";
import ParkingInfoCard from "app/components/ParkingInfoCard/ParkingInfoCard";
import Cookies from 'js-cookie';
import { getSlotById } from "app/services/slots";
import { errorAlert } from "app/utils/alerts";
import { ISlots } from "app/types/IParking";
import { getBookinginProgressDriver } from "app/services/booking";
import { IBookingActive } from "app/types/IBooking";
import { useRouter } from 'next/navigation'

const ParkingInfo: React.FC<{ params: { idSlots: string } }> = ({ params }) => {
  const { idSlots } = params;
  const [slot, setSlot] = useState<ISlots | null>(null);
  const cookieToken = Cookies.get("token");
  const [BookingInProgress, setBookingInProgress] = useState<boolean>(false);
  const [bookingActiveInfo, setBookingActiveInfo] = useState<IBookingActive>();
  const router = useRouter();
  useEffect(() => {
    const checkBookingInProgress = async () => {
        try {
            if (cookieToken) {
                const data = await getBookinginProgressDriver(cookieToken);
                if (data) {
                    setBookingInProgress(true);
                    setBookingActiveInfo(data);
                } else {
                    setBookingInProgress(false);
                }
            } 
        } catch (error) {
            console.error("No hay reserva en progreso:", error);
            setBookingInProgress(false);
        }
    };
    checkBookingInProgress();
}, [cookieToken]);

const handleBookingButtonClick = () => {
    if (BookingInProgress && bookingActiveInfo) {
        const { slotId, bookingId } = bookingActiveInfo;
        router.push(`/parking-information/${slotId}/reserved-parking/${bookingId}/end-reserved`);
    } else {
        router.push("/parkings");
    }
};

  useEffect(() => {
    const fetchSlot = async () => {
      try {
        if (cookieToken) {
          const slotData = await getSlotById(cookieToken, idSlots);
          console.log("answer Apigetslotbyis",slotData);
          setSlot(slotData);
        }
      } catch (e) {
        console.error(e);
        errorAlert("No se pudo obtener la información, intente mas tarde");
      }
    };
    fetchSlot();
  }, [idSlots, cookieToken]);

  if (!slot) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header>
        <li>{BookingInProgress && (<Button text="Tu reserva"onClick={handleBookingButtonClick}/>)}</li>
        <li><Link href="/parkings">Inicio</Link></li>
        <li><Link href="/register-parking">Publicar parqueadero</Link></li>
        <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
        <li><Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
      </Header>

      <ParkingInfoContainer>
        <ParkingInfoTitleContainer>
          <ParkingInfoTitle>{slot.property.name}</ParkingInfoTitle>
          <StarsContainer><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></StarsContainer>
        </ParkingInfoTitleContainer>

        <ParkingInfoCard 
          href={`/parking-information/${idSlots}/booking`} 
          button={<Button text={"Reservar"}/>}
          slot={slot}
        />
      </ParkingInfoContainer>
    </>
  );
}

export default ParkingInfo;