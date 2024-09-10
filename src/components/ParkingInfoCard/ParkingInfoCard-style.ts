import styled from "styled-components";

export const ParkingInfoCardContainer = styled.article`
    width: 100%;
    min-width: 300px;
    height: auto;
    background-color: var(--grey);
    border-radius: 12px;
    padding: 10px 10px 20px 10px;

    @media (min-width: 630px){
        display: flex;
        padding: 25px;
        min-height: 350px;
    }
`
export const ParkingInfoCardImg = styled.div`
    position: relative;
    width: 100%;
    height: 200px;    
    margin-bottom: 20px;

    @media (min-width: 630px){
        min-height: 300px;
        height: 100%;
        width: 40%;
        max-width: 500px;
    }
`
export const ParkingInfoCardImage = styled.img`
    width: 100%;
    height: 100%;
`
export const ParkingInfoCardText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: justify;

    @media (min-width: 630px){
        height: 100%;
        width: 60%;
        padding-left: 30px;
    }
`
export const ParkingInfoCardP = styled.p`
    font-weight: bold;
`

export const ParkingInfoCardPrice = styled.p`
    font-weight: bold;
    font-size: 20px;
`
export const ParkingInfoCardButton = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
`