import styled from "styled-components"
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";


export const FooterStyled = styled.footer`
    height: 140px;
    background-color: var(--blue-dark);
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
    justify-content: center;

    @media (min-width: 576px){
        flex-direction: row;
        justify-content: space-between;
    }
`
export const  ContainerLogo = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

export const Title = styled.p`
    font-size: 16px;
    color: var(--white);
    padding-left: 10px;
    border-left: 2px solid var(--white);
`

export const  ContainerInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`
export const TitleCoppyRight = styled.p`
    font-size: 16px;
    color: var(--white);
`

export const  ContainerSocialMedia = styled.div`
    border-radius: 1px solid red;
    display: flex;
    gap: 10px;
`

const commonIconStyles = `
color: var(--white);
font-size: 25px;
`

export const FacebookStyled = styled(FaFacebook)`${commonIconStyles}`

export const WhatsappStyled = styled(FaWhatsapp)`${commonIconStyles}`

export const InstagramStyled = styled(FaInstagram)`${commonIconStyles}`
