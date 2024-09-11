import styled from "styled-components";

export const ParkingInfoContainer = styled.section`
    width: 90%;
    min-height: calc(100vh - 100px - 100px);
    margin: 0 auto;
    padding: 30px 0;

    @media (min-width: 630px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const ParkingInfoTitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
    @media (min-width: 630px){
        flex-direction: row;
        gap: 30px;
        justify-content: center;
        align-items: center;
    }
`
export const ParkingInfoTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: var(--blue-dark);
`
export const StarsContainer = styled.div`
    display: flex;
    gap: 5px;
    color: var(--orange);
`
