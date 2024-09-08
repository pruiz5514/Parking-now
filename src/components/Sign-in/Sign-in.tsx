"use client"

import Input from "../UI/Input/Input";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../UI/Button/Button";
import { FormBody, FormContainer, FormContainerButton, FormFooter, FormHeader, H1Form, SpanForm } from "../Sign-up/Sign-up-style";
import Link from "next/link";
import Image from "next/image";
import { RiKey2Line } from "react-icons/ri";

const SignIn: React.FC = () => {
    return (
        <FormContainer>
            <FormHeader>
                <Link href ="/"><Image src="/img/LOGO3.png" alt="logo-parkingNow" width={280} height={140}></Image></Link>
                <H1Form>Iniciar Sesión</H1Form>
            </FormHeader>
            <FormBody>
                <Input label= "Correo electrónico" id="userAddressEmailSignIn"  type="email" placeholder="pepito@micorreo.com" icon={HiOutlineMail} required={true}/>
                <Input label= "Contraseña" id="userPasswordSignIn"  type="password" placeholder="Ingresa tu contraseña" icon={RiKey2Line} required={true}/>
            </FormBody>
            <FormContainerButton>
                <Button text={"INGRESAR"}/>
            </FormContainerButton>
            <FormFooter>
                <span>
                    {"¿No tienes cuenta? "}
                </span>
                <Link href="/register">
                   <SpanForm> {"Crea una cuenta"}</SpanForm> 
                </Link>
            </FormFooter>
        </FormContainer>
    );
}
export default SignIn;