import styled from "styled-components";

export const FormContactStyled = styled.article`
    background-color: var(--grey);
    border-radius: 5px;
    margin: 50px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 576px){
        margin: 50px 100px;
        flex-direction: row;
    }
`;

    export const Title = styled.h2`
    font-size: 35px;
    font-weight: bold;
    color: var(--blue);
    padding-left: 20px;
    text-align: center;
    `

    export const TextPurpose = styled.p`
    color: var(--blue-dark);
    font-size: 16px;
    padding: 20px;
    text-align: justify;
    `

