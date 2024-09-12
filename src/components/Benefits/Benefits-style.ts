import styled from "styled-components"
import { FaCheck } from "react-icons/fa";

export const BenefitsStyled = styled.section`
    height: 600px;
    display: flex;
    justify-content: center;
    margin: 50px 20px;
    border: 1px solid red;

    @media (min-width: 576px){
        height: 300px;
        margin: 50px;
        align-items: center;
    }
`

export const ContainerBenefits = styled.div`
    height: 600px;
    width: 90%;
    background-color: var(--grey);
    border-radius: 5px;
    padding: 16px;

    @media (min-width: 576px){
        height: 300px;
    }
`

export const Title = styled.h2`
font-size: 40px;
font-weight: bold;
color: var(--blue-dark);
`

export const BenefitsList = styled.div`
    display: flex;
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

export const CheckIconStyled = styled(FaCheck)`
color: var(--blue-dark);
`
