"use client"
import { useEffect, useState } from "react";
import Button from "app/components/UI/Button/Button";
import { ParkingInfoContainer, ParkingInfoTitle, ParkingInfoTitleContainer, StarsContainer } from "./parking-info-style";
import { IoStar } from "react-icons/io5";
import ParkingInfoCard from "app/components/ParkingInfoCard/ParkingInfoCard";
import Cookies from 'js-cookie';
import { getSlotById } from "app/services/slots";
import { errorAlert } from "app/utils/alerts";
import { ISlots } from "app/types/IParking";

const ParkingInfo: React.FC<{ params: { idSlots: string } }> = ({ params }) => {
  const { idSlots } = params;
  const [slot, setSlot] = useState<ISlots | null>(null);
  const cookieToken = Cookies.get("token");
  
  useEffect(() => {
    const fetchSlot = async () => {
      try {
        if (cookieToken) {
          const slotData = await getSlotById(cookieToken, idSlots);
          console.log(slotData);
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