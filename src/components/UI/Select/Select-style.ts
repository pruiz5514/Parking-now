import styled from "styled-components";

export const SelectAddress = styled.select`
    width: 100%;
    height: 32px;
    border: 1px solid var(--orange);
    border-radius: 10px;
    padding: 5px;
    font-size: 12px;
    outline: none;
    color: var(--blue-dark);
    box-sizing: border-box;

    @media (max-width: 480px) {
        padding: 5px;
        font-size: 11px;
    }
`;