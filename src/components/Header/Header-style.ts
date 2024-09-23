import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    height: 100px;
    background-color: var(--blue-dark);
    display: flex;
    position: sticky;
    top:0;
    z-index: 5;
`
export const HeaderSection = styled.section`
    width: 30%;
    min-width: 150px;
    height: 100%;
    padding-left: 30px;
    display: flex;
    align-items: center;
`
export const HeaderNav = styled.nav`
    display: flex;
    width: 70%;
    height: 100%;
    justify-content: end;
    align-items: center;
    padding-right: 50px;
`
export const HeaderUl = styled.ul`
    display: none;
    gap: 40px;
    color: var(--white);
    font-size: 20px;
    align-items: center;
    @media (min-width: 950px){
        display: flex;
    }
`
export const BurgerButton = styled.button`
    width: auto;
    height: auto;
    color: var(--white);
    font-weight: bold;
    font-size: 34px;
    @media (min-width: 950px){
        display: none;
    }
`
export const HeaderAsideContainer = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    display: ${props => (props.$isOpen ? 'flex' : 'none')};
    top: 0;
    left: 0;
    min-height: 100vh;
    background-color: rgba(0,0,0,.6);
    z-index: 50;
    width: 100%;
`
export const HeaderAside = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    min-height: 100vh;
    background-color: var(--blue-dark);
    padding: 50px 30px;

    @media (min-width: 950px){
        display: none;
    }
`
export const HeaderUlAside = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--white);
    font-size: 16px;
    padding-top: 32px;
`
export const CloseHeaderButton = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    color: var(--white);
    font-weight: bold;
    font-size: 34px;
`