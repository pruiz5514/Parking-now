import styled from "styled-components";

export const ButtonStyle = styled.button`
    background-color: var(--orange);
    color: var(--white);
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    cursor: pointer;

    :hover {
        background-color: var(--white); /* Color de fondo al pasar el ratón */
        color: var(--orange);
    }
`