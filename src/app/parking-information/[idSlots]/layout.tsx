"use client"
import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getBookinginProgressDriver } from "app/services/booking";

const Layouta = ({ children }: { children: React.ReactNode }) => {
  const cookieToken = Cookies.get("token");
  const [BookingInProgress, setBookingInProgress] = useState(false);
  const [bookingActiveInfo, setBookingActiveInfo] = useState<any>(null);
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

  return (
    <>
      <Header>
        <li>{BookingInProgress && (<Button text="Tu reserva" onClick={handleBookingButtonClick} />)}</li>
        <li><Link href="/parkings">Inicio</Link></li>
        <li><Link href="/register-parking">Publicar parqueadero</Link></li>
        <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
        <li><Button text="Cerrar sesión" onClick={() => { Cookies.remove("token"); router.push("/"); }} /></li>
      </Header>
      {children}
    </>
  );
}

export default Layouta;
