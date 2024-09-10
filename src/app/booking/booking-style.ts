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
    padding: 50px;
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

const commonContainerAmountTimeAndTotal = `
   display: flex;
   justify-content: space-around;
`

export const ContainerAmountTime = styled.div`${commonContainerAmountTimeAndTotal}`

export const ContainerAmountTotal = styled.div`${commonContainerAmountTimeAndTotal}`

export const Containerhours = styled.div`
   background-color: var(--blue-dark);
   color: var(--white);
   border-radius: 50%;
   width: 30px;
   text-align: center;
`

export const ContainerDetailsBooking = styled.section`
    width: 80%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: 20px;
`

const commonContainersDetails = `
    background-color: var(--grey);
    border-radius: 10px;
    width: 60%;
    height: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    height: 40%;
`

export const ContainerTime = styled.div`${commonContainersDetails}`

export const ContainerDeatails = styled.div`${commonContainersDetails}`

export const Text = styled.p`
color: var(--blue-dark);
`
export const ContainerButton = styled.div`
display: flex;
justify-content: center;
`