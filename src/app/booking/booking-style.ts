import styled from "styled-components";

export const MainStyle = styled.main`
    width: 100%;
    min-height: calc(100vh - 100px - 100px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    

    @media (min-width: 576px){
        flex-direction: row;
    }
`

export const ContainerDataBooking = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 50px 0px;

    @media (min-width: 576px){
        padding-left: 35px;
    }
`

export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: var(--blue-dark);
`

const commonContainerInfoStyles = `
    display: flex;
    flex-direction: column;
`

export const ContainerInfoContact = styled.section`${commonContainerInfoStyles}`

export const ContainerInfoParking = styled.section`${commonContainerInfoStyles}`

export const TitleInfo = styled.h4`
    color: var(--blue-dark);
    font-weight: bold;
    text-align: center;
`

export const ContainerAmountTotal = styled.div`
   display: flex;
   justify-content: space-around;
`


export const ContainerDetailsBooking = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: 20px 0;

    @media (min-width: 576px){
        padding-right: 35px;
    }
`

const commonContainersDetails = `
    width: 100%;
    background-color: var(--grey);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    height: 40%;

     @media (min-width: 576px){
        max-width: 390px;
    }
`

export const ContainerTime = styled.div`${commonContainersDetails}`

export const ContainerDeatails = styled.div`${commonContainersDetails}`

export const Text = styled.p`
    color: var(--blue-dark);
`
export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`