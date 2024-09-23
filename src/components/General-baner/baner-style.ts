import styled from "styled-components"

export const BanerStyled = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    height: 300px;
    align-items: center;
`;

export const BanerBackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
`

export const Title = styled.h2`
  position: absolute;
  font-size: 35px;
  font-weight: bold;
  color: var(--white);
  text-align: center;

  @media(min-width: 576px){
      font-size: 40px;
  }
`

export const Info = styled.div`
  width: 100%;
  height: 100%;
 
  @media(min-width: 576px){
    display: flex;
    width:70%;
  }
`;

export const Imagen = styled.div`
  width: 30%;
  height: 100%;
  display: none;

  @media(min-width: 576px){
    display: flex;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info2 = styled(Info)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Img3 = styled.div`
  height: 50%;
  width: 100%;
`;

export const Inf4 = styled.div`
  /* gap: 10px; */
  display: flex;
  height: 50%;
  width: 100%;
`;

export const ImgHalf = styled.div`
  width: 50%;
  height: 100%;
`;

export const ImgHalfStyled = styled(StyledImg)`
  height: 100%;
`;

export const ImgHalfStylede = styled(StyledImg)`
  height: 100%;
  object-fit: cover;
  object-position:10%  41%;
`;