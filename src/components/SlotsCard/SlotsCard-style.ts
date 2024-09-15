import styled from "styled-components";

export const SlotsCardContainer = styled.article`
    width: 100%;
    min-width: 300px;
    max-width: 1000px;
    height: auto;
    border-radius: 12px;
    padding: 10px 10px 20px 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

export const SlotCardTilte = styled.h1`
    font-size: 20px;
    color: var(--blue-dark);
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`
export const SlotCardTextContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const SlotTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const SlotName = styled.span`
    font-weight: bold;
`
export const SlotState = styled.span`
    display: flex;
    gap: 5px;
    align-items: center;
`