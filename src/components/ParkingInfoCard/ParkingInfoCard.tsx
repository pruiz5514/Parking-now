"use client";
import { ParkingInfoCardButton, ParkingInfoCardContainer, ParkingInfoCardImage, ParkingInfoCardImg, ParkingInfoCardP, ParkingInfoCardPrice, ParkingInfoCardText } from "./ParkingInfoCard-style";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import React from "react";
import { ISlots } from "app/types/IParking";

interface ParkingInfoCardProps {
  button?: React.ReactNode;
  slot: ISlots;
  href: string;
}

const ParkingInfoCard: React.FC<ParkingInfoCardProps> = ({ button, slot, href }) => {
  return (
    <ParkingInfoCardContainer>
      <ParkingInfoCardImg>
        <ParkingInfoCardImage
          alt={slot.name}
          style={{ borderRadius: '12px' }}
          src={slot.property.image_url}
        />
      </ParkingInfoCardImg>
      <ParkingInfoCardText>
        <p>{slot.property.description}</p>
        <ParkingInfoCardP>
          <FaLocationDot /> {slot.property.commune.name}
        </ParkingInfoCardP>
        <ParkingInfoCardP>
          <GiHomeGarage /> {slot.is_covered ? 'Parqueadero cubierto' : 'Parqueadero descubierto'}
        </ParkingInfoCardP>
        <ParkingInfoCardButton>
          <ParkingInfoCardPrice>$ {slot.hour_price} /Hora</ParkingInfoCardPrice>
          <Link href={href}>{button}</Link>
        </ParkingInfoCardButton>
      </ParkingInfoCardText>
    </ParkingInfoCardContainer>
  );
}

export default ParkingInfoCard;