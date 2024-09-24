"use client";
import { CommuneTextContainer, ParkingInfoCardButton, ParkingInfoCardContainer, ParkingInfoCardImage, ParkingInfoCardImg, ParkingInfoCardP, ParkingInfoCardPrice, ParkingInfoCardText } from "./ParkingInfoCard-style";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import React from "react";
import { ISlots } from "app/types/IParking";
import { ParkingInfoTitle } from "app/app/parking-information/[idSlots]/parking-info/parking-info-style";

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
          alt={slot.property.name}
          style={{ borderRadius: '12px' }}
          src={slot.property.image_url}
        />
      </ParkingInfoCardImg>
      <ParkingInfoCardText>
        <ParkingInfoTitle>Celda {slot.name}</ParkingInfoTitle>
        <p>{slot.property.description}</p>
          <ParkingInfoCardP>
            <CommuneTextContainer>
              <FaLocationDot /> {slot.property.commune.name} 
            </CommuneTextContainer>
            <p>{slot.property.address}</p>
          </ParkingInfoCardP>
        
        <ParkingInfoCardP>
          <CommuneTextContainer>
            <GiHomeGarage /> {slot.is_covered ? 'Parqueadero cubierto' : 'Parqueadero descubierto'}
          </CommuneTextContainer>
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