import styled from "styled-components";

export const ReservedParkingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--blue-dark);
    padding: 30px;
    z-index: 10;
`
export const ReservedParkingArticle = styled.article`
    position: relative;
    width: 100%;
    min-width: 300px;
    max-width: 500px;
    height: 300px;
    background-color: var(--white);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding: 30px;
`
export const ReservedParkingText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
`
export const ReservedParkingImg = styled.div`
    border-radius: 50%;
    background-color: var(--white);
    position: absolute;
    top: -95px;
`