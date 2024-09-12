import styled from "styled-components"

export const HeroStyled = styled.section`
    height: 700px;
    background-image: url(https://i.pinimg.com/originals/54/0f/42/540f4282c839fce333587b706a77acc1.jpg);
    background-repeat: no-repeat;
    background-size: 100% 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (min-width: 576px){
        justify-content: start;
        height: 500px;
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
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    /* padding: 0 50px; */
    z-index: 1;
`

export const TitleContainer = styled.div`
    text-align: center;

    & > p { 
        color: var(--white);
        font-size: 20px;
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
    }
    
    @media (min-width: 576px){
        padding: 0 50px;

        & > p { 
        justify-content: start;
    }
    
    }
`

export const Title = styled.h1`
    font-size: 80px;
    font-weight: bold;
    color: var(--white);
`