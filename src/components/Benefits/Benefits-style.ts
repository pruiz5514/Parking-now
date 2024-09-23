import styled from "styled-components"

export const BenefitsList = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:20px;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        & > p {
            display: flex;
            gap: 10px;
            color: var(--blue-dark);
            font-size: 20px;
        }
    }

    @media (min-width: 750px){
        flex-direction: row;
        margin: 50px 100px;

        & > div {
        width: 40%;

        }
    }
`

export const Title = styled.h2`
    font-size: 35px;
    text-align:center;
    font-weight: bold;
    color: var(--blue);
`

export const ContainerImage = styled.div`
display: flex;
align-items: center;
`