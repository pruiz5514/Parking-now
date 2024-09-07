"use client"
import Image from "next/image";
import Button from "../UI/Button/Button";
import { PropsWithChildren } from "react";
import { HeaderNav, HeaderSection, HeaderStyle, HeaderUl } from "./Header-style";
import Link from "next/link";


const Header = ({ children  }: PropsWithChildren) => {
    return(
        <HeaderStyle>
            <HeaderSection>
                <Link href="/"><Image src="/img/LOGO1.png" alt="logo-principal" width={140} height={140}/></Link> 
            </HeaderSection>
            <HeaderNav>
                <HeaderUl>
                    {children}
                </HeaderUl>
            </HeaderNav>
        </HeaderStyle>
    )
}
 export default Header;