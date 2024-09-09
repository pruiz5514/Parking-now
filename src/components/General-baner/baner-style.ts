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
    font-size: 32px;
    color: var(--white);
    text-align: center;
`