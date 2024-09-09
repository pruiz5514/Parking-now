import styled from "styled-components";

export const MainEsStyle = styled.main`
    width: 100%;
    min-height: calc(100vh - 100px - 100px);
    display: flex;
`
export const AsideEsStye = styled.aside<{ isOpen: boolean }>`
    position: fixed;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--white);
    width: 100%;
    height: 100vh;
    padding: 30px;
    gap: 50px;
    @media (min-width: 576px){
        display: flex;
        position: relative;
        width: 30%;
        padding: 30px;
        max-width: 300px;
        min-height: calc(100vh - 100px - 100px);
        gap: 40px;
        z-index: 0;
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
export const CloseAsideButton = styled.button`
    position: absolute;
    right: 30px;
    top: 30px;
    font-weight: bold;
    font-size: 28px;

    @media (min-width: 576px){
        display: none;
    }
`