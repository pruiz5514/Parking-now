import styled from "styled-components"

export const HeroStyled = styled.section`
    height: 550px;
    background-image: url(https://www.wradio.com.co/resizer/v2/CNVLIH5MPJAM3N7CFHFYZTGUUI.jpg?auth=d95d120b35548dc34d3f611c74f3fc12e2ca1d27d1e5176e0ff1c8c18f0f0a02&width=650&height=488&quality=70&smart=true);
    background-repeat: no-repeat;
    background-size: 100% 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const HeroBackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
`
export const HeroContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
    z-index: 1;
`
export const Title = styled.h1`
    font-size: 60px;
    color: var(--white);
    text-align: center;
`