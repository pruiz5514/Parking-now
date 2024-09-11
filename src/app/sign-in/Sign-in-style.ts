import styled from "styled-components";

export const MainSignIn = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    box-sizing: border-box;
    margin:0;
`;
export const SpanForm = styled.span`
    margin-top: 0;
    color: var(--orange);
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
`;

export const SpanContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const SelectAddress = styled.select`
    border: 1px solid var(--orange);
    border-radius:20px;
    padding: 5px;
    font-size: 12px;
    outline: none;
    color: var(--blue-dark);
`;

