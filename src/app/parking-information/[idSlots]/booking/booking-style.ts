import styled from "styled-components";

export const MainStyle = styled.main`
    min-height: calc(100vh - 100px - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    
    @media (min-width: 576px){
        justify-content: space-around;
        flex-direction: row;
    }
`
export const Title = styled.h2`
    font-size: 35px;
    font-weight: bold;
    color: var(--blue-dark);
    text-align: center;
    margin-bottom: 5px;
`

const commonContainerInfoStyles = `
    display: flex;
    flex-direction: column;
    gap: 10px
`

export const ContainerInfoContact = styled.section`${commonContainerInfoStyles}`

// export const ContainerInfoParking = styled.section`${commonContainerInfoStyles}`

export const TitleInfo = styled.h3`
    color: var(--blue-dark);
    text-align: center;
    font-size: 25px;
    font-weight: bold;
`
export const ContainerDeatails = styled.div`
    background-color: var(--grey);
    border-radius: 10px;
    padding: 20px;
    margin: 20px;

     @media (min-width: 576px){
        max-width: 440px;
    }
`
export const Span = styled.span`
    color: var(--orange)
`
