"use client"
import Image from "next/image";
import Button from "../UI/Button/Button";
import { PropsWithChildren, useState } from "react";
import { BurgerButton, CloseHeaderButton, HeaderAside, HeaderNav, HeaderSection, HeaderStyle, HeaderUl, HeaderUlAside } from "./Header-style";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


const Header = ({ children  }: PropsWithChildren) => {
    const [isOpen,setIsOpen] = useState(false)

    return(
        <HeaderStyle>
            <HeaderSection>
                <Link href="./parkings"><Image src="/img/LOGO1.png" alt="logo-principal" width={140} height={140}/></Link> 
            </HeaderSection>

            <HeaderNav>
                <BurgerButton onClick={()=>setIsOpen(true)}>
                    <RxHamburgerMenu />
                </BurgerButton>
                <HeaderAside isOpen={isOpen}>
                    <CloseHeaderButton onClick={()=>setIsOpen(false)}>
                        <IoClose/>
                    </CloseHeaderButton>
                    <HeaderUlAside>
                        {children}
                    </HeaderUlAside>
                </HeaderAside>
                <HeaderUl>
                    {children}
                </HeaderUl>
            </HeaderNav>
        </HeaderStyle>
    )
}
 export default Header;