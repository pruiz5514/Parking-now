import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    height: 100px;
    background-color: var(--blue-dark);
    display: flex;
`
export const HeaderSection = styled.section`
    width: 30%;
    height: 100%;
    padding-left: 30px;
    display: flex;
    align-items: center;
`
export const HeaderNav = styled.nav`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 50px;
`
export const HeaderUl = styled.ul`
    display: flex;
    gap: 40px;
    color: var(--white);
    font-weight: bold;
    font-size: 16px;
    align-items: center;
`
