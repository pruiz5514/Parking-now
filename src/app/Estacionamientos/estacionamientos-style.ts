import styled from "styled-components";

export const MainEsStyle = styled.main`
    width: 100%;
    min-height: calc(100vh - 100px - 100px);
    display: flex;
`
export const AsideEsStye = styled.aside`
    display: none;
    @media (min-width: 576px){
        display: flex;
        flex-direction: column;
        width: 30%;
        padding: 30px;
        max-width: 300px;
        min-height: calc(100vh - 100px - 100px);
        gap: 40px;
    }
`
export const FormEsStyle = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const H2EsStyle = styled.h2`
    font-weight: bold;
`
export const DivEsStyle = styled.div`
    display: flex;
    gap: 15px;
`
export const LabelEsStyle = styled.label`

`
export const MainSectionEsStyle = styled.section`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 100px - 100px);
    padding: 30px;
`
export const FilterButton = styled.button`
    display: flex;
    border: none;
    background-color: var(--white);
    gap: 10px;
    align-items: center;
    font-weight: bold;
    font-size: 18px;

    @media (min-width: 576px){
        display: none;
    }
`