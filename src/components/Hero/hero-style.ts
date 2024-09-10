import styled from "styled-components"

export const HeroStyled = styled.section`
    height: 700px;
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xy3iknFn34evsBFA4IqWrkhMEpyAyVqZMg&s);
    background-repeat: no-repeat;
    background-size: 100% 700px;
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