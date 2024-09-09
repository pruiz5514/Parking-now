import styled from "styled-components";

export const FormContainer = styled.article`
    width: 100%;
    max-width: 600px;
    margin:auto;
    background-color: var(--grey);
    padding-right: 100px;
    padding-left: 100px;
    padding-bottom: 20px;
    padding-top: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

export const FormHeader = styled.div`
    display: flex;
    // border: 2px solid var(--blue-dark);
    flex-direction: column;
    align-items: center;
`;

export const H1Form = styled.h1`
    margin-top: 0;
    color: var(--blue);
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center;
`;
export const SpanForm = styled.span`
    margin-top: 0;
    color: var(--orange);
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
`;
export const FormBody = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;
export const FormFooter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    // border: 2px solid var(--blue-dark);
`;

export const SelectAddress = styled.select`
    border: 1px solid var(--orange);
    border-radius:20px;
    padding: 5px;
    font-size: 12px;
    outline: none;
    color: var(--blue-dark);
`;