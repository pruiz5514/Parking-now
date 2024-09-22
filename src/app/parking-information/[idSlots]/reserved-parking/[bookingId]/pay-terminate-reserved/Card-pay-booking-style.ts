import styled from "styled-components";


export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 470px;
  min-width: 250px;
  min-height: 200px;
  background-color: var(--blue);
  border-radius: 12px;
  padding: 10px;
  
  @media (min-width: 711px) {
      flex-direction: row;
      height: 180px;
      min-width: 290px;
    }
    `;

export const CardContent = styled.div`
  width: 100%;
  padding: 10px 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  `;

export const H2Card = styled.h2`
  font-weight: bold;
  color: var(--white);
  margin-bottom: 10px;
  `;

export const PCard = styled.p`
  font-size: 13px;
  margin-bottom: 7px;
  color: var(--white);
  `;

export const PriceCard = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
  margin-top: 10px;
  `;

export const DivButtonContainer = styled.div`
  display: flex;
  min-width: 190px;
  justify-content: space-between;
  margin-top: 15px;

  @media (min-width: 711px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonWrapper = styled.div`
  width: 45%;

  @media (min-width: 711px) {
    width: 45%;
  }
`;
