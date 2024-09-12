import styled from "styled-components"

export const BanerStyled = styled.section`
    height: 300px;
    background-image: url(https://caracol.com.co/resizer/v2/UC4NV3YJ4NCXDKTG34DZXFO2JU.jpg?auth=02fcad0d5a6e93bf195787dffd1767170031b7cbd68d0c78364d1f6eb9bda549&width=650&height=488&quality=70&smart=true);
    background-repeat: no-repeat;
    background-size: 100% 500px;
    display: flex;
    position: relative;
`
export const BanerBackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
`
export const BanerContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 50px;
    z-index: 1;
`
export const Title = styled.h2`
    font-size: 35px;
    color: var(--white);
    text-align: center;
`
export const PpalSection = styled.section`
  margin-block: 50px;
  justify-content: space-between;
`;

export const Contenedor = styled.article`
  gap: 10px;
  display: flex;
  width: 100%;

`;

export const Contenedor2 = styled(Contenedor)`
  height: 200px;
`;

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
  height: 48%;
  width: 100%;
`;

export const Inf4 = styled.div`
  gap: 10px;
  display: flex;
  height: 48%;
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
  object-position:10%  55%;

`;