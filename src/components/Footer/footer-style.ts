import styled from "styled-components"

export const FooterStyle = styled.footer`
    height: 100px;
    background-color: var(--blue-dark);
    display: flex;
    align-items: center;
    padding: 0 16px;
    justify-content: space-between;
`
export const  ContainerLogo = styled.div`
    border: 1px solid red;
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

export const  ContainerSocialMedia = styled.div`
    border-radius: 1px solid red;
`

export const Links = styled.link `
font-size: 24px;
font-weight: bold;
`