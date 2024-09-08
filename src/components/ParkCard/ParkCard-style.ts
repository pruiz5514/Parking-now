import styled from "styled-components";

export const ArticleCardPark = styled.article`
    display: flex;
    width: 700px;
    height: 150px;
    background-color: var(--blue);
    border-radius: 12px;
    position: relative;
`
export const ImgContainerCardPark = styled.div`
    width: 50%;
    max-width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImgCardPark = styled.img`
    width: 90%;
    height: 85%;
    border-radius: 12px;
`

export const TextCardPark = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 30px;
`

export const H2CardPark = styled.h2`
    font-weight:bold;
    color: var(--white);
    margin-bottom: 10px;
`
export const PCardPark = styled.p`
    font-size: 13px;
    margin-bottom: 7px;
    color: var(--white);
`
export const PriceCardPark = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: var(--white);
    margin-top: 10px;
`
export const DivButtonContainer = styled.p`
    width: auto;
    height: auto;
    position: absolute;
    bottom: 20px;
    right: 30px;
`