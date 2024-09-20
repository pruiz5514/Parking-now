"use client";
import { ParkingInfoCardButton, ParkingInfoCardContainer, ParkingInfoCardImage, ParkingInfoCardImg, ParkingInfoCardP, ParkingInfoCardPrice, ParkingInfoCardText } from "./ParkingInfoCard-style";
import Button from "../UI/Button/Button";
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

const ParkingInfoCard: React.FC<ParkingInfoCardProps> = ({button, slot, href}) => {
  return (
    <ParkingInfoCardContainer>
      <ParkingInfoCardImg>
        <ParkingInfoCardImage 
          alt={slot.name} 
          style={{ borderRadius: '12px' }} 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTud3ZSGczSxU0tQb4oTlLZPjD6g-Z-Y6rCbw&s" 
        />
      </ParkingInfoCardImg>
      <ParkingInfoCardText>
        <p>{slot.name}</p>
        {slot.property && slot.property.commune && (
          <ParkingInfoCardP>
            <FaLocationDot /> {slot.property.commune.name}
          </ParkingInfoCardP>
        )}
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