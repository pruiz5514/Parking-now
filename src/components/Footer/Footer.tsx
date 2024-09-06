'use client'

import { PropsWithChildren } from "react"
import { FooterStyle, Title } from "./footer-style";

const Footer= ({ children  }: PropsWithChildren) => {
    return (
        <FooterStyle>
            <Title>FOOTER</Title>
            <nav>
                {children}
            </nav>
        </FooterStyle>
    )
}

export default Footer