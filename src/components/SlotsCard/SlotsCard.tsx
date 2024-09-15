"use client"

import { MdEventAvailable } from "react-icons/md";
import { SlotCardTextContainer, SlotCardTilte, SlotName, SlotsCardContainer, SlotState, SlotTextContainer } from "./SlotsCard-style";
import { CgUnavailable } from "react-icons/cg";

const SlotsCard = ()=>{
    return(
        <SlotsCardContainer>
            <SlotCardTilte> Celdas </SlotCardTilte>
            <SlotCardTextContainer>
                <SlotTextContainer>
                    <SlotName>V 34</SlotName> 
                    <SlotState>Disponible <MdEventAvailable /></SlotState>
                </SlotTextContainer>
                <SlotTextContainer>
                    <SlotName>V 50</SlotName> 
                    <SlotState>Ocupado <CgUnavailable/></SlotState>
                </SlotTextContainer>
            </SlotCardTextContainer>
        </SlotsCardContainer>
    )
}

export default SlotsCard;