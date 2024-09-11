import styled from "styled-components";

export const MainEsStyle = styled.main`
    width: 100%;
    min-height: calc(100vh - 100px - 100px);
    display: flex;
`

export const AsideStyleContainer = styled.div<{ isOpen: boolean }>`
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    position: ${props => (props.isOpen ? 'fixed' : 'none')};
    z-index: ${props => (props.isOpen ? '10' : '0')};
    min-height: 100vh;
    width: 100%;

    @media (min-width: 711px){
        display: flex;
        position: relative;
        width: 30%;
    }
`

export const AsideEsStye = styled.aside<{ isOpen: boolean }>`
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    position: fixed;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--white);
    width: 70%;
    min-height: 100vh;
    padding: 80px 10px;
    gap: 50px;

    @media (min-width: 711px){
        display: flex;
        position: relative;
        width: 100%;
        padding: 30px;
        max-width: 300px;
        min-height: calc(100vh - 100px - 100px);
        gap: 40px;
        z-index: 0;
    }
`
export const AsideBackground = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    min-height: 100vh;
    background-color: rgba(0,0,0,.6);
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    
    @media (min-width: 711px){
        display: none;
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
    width: 100%;
    min-height: calc(100vh - 100px - 100px);
    padding: 30px;

    @media (min-width: 711px){
        justify-content: center;
    }
`
export const FilterButton = styled.button`
    display: flex;
    border: none;
    background-color: var(--white);
    gap: 10px;
    align-items: center;
    font-weight: bold;
    font-size: 18px;

    @media (min-width: 711px){
        display: none;
    }
`
export const CloseAsideButton = styled.button`
    position: absolute;
    right: 15px;
    top: 30px;
    font-weight: bold;
    font-size: 28px;

    @media (min-width: 711px){
        display: none;
    }
`