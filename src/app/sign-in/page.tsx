"use client"

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {  SpanContent, SpanForm } from "../sign-up/Sign-up-style";
import Link from "next/link";
import Image from "next/image";
import Form from "app/components/General-form/Form";
import { Label } from "app/components/UI/Input/input-style";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { MainSignIn } from "./Sign-in-style";

const SignIn: React.FC = () => {
    return (
        <>
            <MainSignIn>
                <Form
                    headerContent={
                        <>
                            <Link href="/"><Image src="/img/LOGO3.png" alt="logo-parkingNow" width={280} height={140}></Image></Link>
                        </>
                    }
                    title="Iniciar Sesión"
                    footerContent={
                        <>
                            <SpanContent>
                            <Link href="./parkings"><Button text={"Ingresar"}/></Link>
                                <Label>
                                    {"¿No tienes cuenta? "}
                                </Label>
                                <Link href="./sign-up">
                                    <SpanForm> {"Crea una cuenta"}</SpanForm>
                                </Link>
                            </SpanContent>
                        </>
                    }
                >
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="pepito@micorreo.com" icon={FaEnvelope} required={true} />
                    <Input label="Contraseña" id="userPassword" type="password" placeholder="Ingresa tu contraseña" icon={FaLock} required={true} />
                </Form>
            </MainSignIn>
        </>
    );
}
export default SignIn;