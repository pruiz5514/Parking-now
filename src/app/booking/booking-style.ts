import styled from "styled-components";

export const MainStyle = styled.main`
    width: 100%;
    min-height: calc(100vh - 100px - 100px);
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 576px){
        flex-direction: row;
    }
`

export const ContainerDataBooking = styled.section`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    gap: 20px;
    margin: 20px;
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

export const ContainerDetailsBooking = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 1px solid red;
    margin: 20px;
`

const commonContainersDetails = `
  border: 1px solid red;
    background-color: var(--grey);
    border-radius: 10px;
    width: 60%;
    height: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const ContainerTime = styled.div`${commonContainersDetails}`

export const ContainerDeatails = styled.div`${commonContainersDetails}`

export const Text = styled.p`
color: var(--blue-dark);
`
