import styled from "styled-components";

export const MainRegParking = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh; 
    padding: 30px 0;
    box-sizing: border-box;

    @media (max-width: 900px) {
     padding: 15px;
}
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

