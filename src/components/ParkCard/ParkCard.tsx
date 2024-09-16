import Image from "next/image"
import { ArticleCardPark, DivButtonContainer, H2CardPark, ImgCardPark, ImgContainerCardPark, PCardPark, PriceCardPark, TextCardPark } from "./ParkCard-style"
import Button from "../UI/Button/Button";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import { ISlots } from "app/types/IParking";
import { FaCarSide, FaMotorcycle } from "react-icons/fa";


interface ParkCardProps {
    href: string; 
    text: string;
    slot: ISlots;
}

const ParkCard: React.FC<ParkCardProps> = ({href,text, slot})=>{
    return(
        <>
            <ArticleCardPark>
                <ImgContainerCardPark>
                    <ImgCardPark src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTud3ZSGczSxU0tQb4oTlLZPjD6g-Z-Y6rCbw&s" alt="Unidad"/>
                </ImgContainerCardPark>
                <TextCardPark>
                    <H2CardPark>{slot.property.name}</H2CardPark>
                    <PCardPark> <FaLocationDot />{slot.property.commune.name}</PCardPark>
                    <PCardPark> <GiHomeGarage /> {slot.is_covered ? `Parqueadero cubierto` : 'Parqueadero descubierto'}</PCardPark>
                    <PCardPark> {slot.vehicle_type_id === 1 ? (<><FaCarSide /> Automóvil</>) : (<><FaMotorcycle /> Moto</>)}</PCardPark>
                    <PriceCardPark>$ {slot.hour_price}</PriceCardPark>
                    <DivButtonContainer>
                        <Link href={href} style={{ width: '100%' }}><Button text={text}/></Link>
                    </DivButtonContainer>
                </TextCardPark>
            </ArticleCardPark>
        </>
        
    )
}

export default ParkCard;