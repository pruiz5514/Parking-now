"use client"

import { MdOutlinePersonOutline } from "react-icons/md";
import { LiaAddressCardSolid } from "react-icons/lia";
import { RiHomeHeartLine, RiKey2Line } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FormBody, FormContainer, FormContainerButton, FormFooter, FormHeader, H1Form, SpanForm } from "./Sign-up-style";
import Link from "next/link";
import Image from "next/image";
import Input from "app/components/UI/Input/Input";
import Button from "app/components/UI/Button/Button";

const SignUp: React.FC = () => {
    return (
        <FormContainer>
            <FormHeader>
                <Link href ="/"><Image src="/img/LOGO3.png" alt="logo-parkingNow" width={280} height={140}></Image></Link>
                <H1Form>Registro</H1Form>
            </FormHeader>
            <FormBody>
                <Input label= "Nombre completo" id="userName"  type="text" placeholder="Ingresa tu nombre" icon={MdOutlinePersonOutline} required={true}/>
                <Input label= "Número de cédula" id="userId"  type="number" placeholder="1008001003" icon={LiaAddressCardSolid} required={true}/>
                <Input label= "Dirección de residencia" id="userAddressHome"  type="text" placeholder=" mde cra 55 # 25-15 " icon={RiHomeHeartLine} required={true}/>
                <Input label= "Número de contacto" id="userPhone"  type="number" placeholder="123 456 14 25" icon={LuPhoneCall} required={true}/>
                <Input label= "Correo electrónico" id="userAddressEmail"  type="email" placeholder="pepito@micorreo.com" icon={HiOutlineMail} required={true}/>
                <Input label= "Contraseña" id="userPassword"  type="password" placeholder="Ingresa tu contraseña" icon={RiKey2Line} required={true}/>
            </FormBody>
            <FormContainerButton>
                <Button text={"CREAR CUENTA"}/>
            </FormContainerButton>
            <FormFooter>
                <span>
                    {"¿Ya tienes cuenta? "}
                </span>
                <Link href="/login">
                   <SpanForm> {"Ingresa"}</SpanForm> 
                </Link>
            </FormFooter>
        </FormContainer>
    );
}
export default SignUp;