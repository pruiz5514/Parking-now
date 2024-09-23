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
        
        & > div {
            & > p {
                gap: 4px;
                font-size: 22px;
            }
        }
    }
    & > div {
        display: flex;
        flex-direction: column;
        width:99%;

    }
`;