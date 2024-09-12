import styled from "styled-components"
import { FaCheck } from "react-icons/fa";

export const BenefitsStyled = styled.section`
    display: flex;
    justify-content: center;
    background-color: var(--grey);
    border-radius: 5px;
    margin: 50px 16px;

    @media (min-width: 576px){
        height: 320px;
        margin: 50px 100px;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
    }
    
`

export const BenefitsList = styled.div`
    width: 80%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;

    @media (min-width: 576px){
        flex-direction: row;
        justify-content: space-around;
    }

    & > div {
        display: flex;
        flex-direction: column;

        & > p {
            display: flex;
            align-items: center;
            gap: 4px;
            color: var(--blue-dark);
            font-size: 16px;
        }
    }
`

export const Title = styled.h2`
font-size: 40px;
font-weight: bold;
color: var(--blue);
`

export const CheckIconStyled = styled(FaCheck)`
color: var(--blue-dark);
`
