import styled from "styled-components"

export const HeroStyled = styled.section`
    height: 700px;
    width: 100%;
    background-image: url(https://i.pinimg.com/originals/54/0f/42/540f4282c839fce333587b706a77acc1.jpg);
    background-repeat: no-repeat;
    background-size: 100% 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;

    @media (min-width: 1200px){
        background-image: url(video/hero.mp4);
        justify-content: center;
    }
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
    z-index: 1;
`

export const TitleContainer = styled.div`

    & > p { 
        color: var(--white);
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @media (min-width: 576px){
        & > p { 
        font-size: 30px;
    }
}
`

export const Title = styled.h1`
    font-size: 80px;
    font-weight: bold;
    color: var(--white);

    @media (min-width: 576px){
        font-size: 120px;
}
`

export const VideoBackground = styled.div`
    position: relative;
    overflow: hidden;
`

export const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    transform: translate(-50%, -50%);

`