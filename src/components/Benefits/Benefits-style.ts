import styled from "styled-components"
import { FaCheck } from "react-icons/fa";

export const BenefitsList = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: var(--grey);
    border-radius: 5px;
    margin: 50px 16px;
    padding:20px;

    @media (min-width: 576px){
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        margin: 50px 100px;
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
font-size: 35px;
text-align:center;
font-weight: bold;
color: var(--blue);
`

export const CheckIconStyled = styled(FaCheck)`
color: var(--blue-dark);
`
