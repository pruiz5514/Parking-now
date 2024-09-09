import styled from "styled-components"
import { FaCheck } from "react-icons/fa";

export const BenefitsStyled = styled.section`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerBenefits = styled.div`
    height: 250px;
    width: 100%;
    margin: 50px;
    background-color: var(--grey);
    border-radius: 5px;
    padding: 16px;
`

export const Title = styled.h2`
font-size: 40px;
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
