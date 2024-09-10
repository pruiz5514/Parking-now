"use client"

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { MainSign, SpanContent, SpanForm } from "../sign-up/Sign-up-style";
import Link from "next/link";
import Image from "next/image";
import Form from "app/components/General-form/Form";
import { Label } from "app/components/UI/Input/Input-style";
import { FaEnvelope, FaLock } from "react-icons/fa";

const SignIn: React.FC = () => {
    return (
        <>
            <MainSign>
                <Form
                    headerContent={
                        <>
                            <Link href="/"><Image src="/img/LOGO3.png" alt="logo-parkingNow" width={280} height={140}></Image></Link>
                        </>
                    }
                    title="Iniciar Sesión"
                    footerContent={
                        <>
                            <Button text={"INGRESAR"}/>
                            <SpanContent>
                                <Label>
                                    {"¿No tienes cuenta? "}
                                </Label>
                                <Link href="/register">
                                    <SpanForm> {"Crea una cuenta"}</SpanForm>
                                </Link>
                            </SpanContent>
                        </>
                    }
                >
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="pepito@micorreo.com" icon={FaEnvelope} required={true} />
                    <Input label="Contraseña" id="userPassword" type="password" placeholder="Ingresa tu contraseña" icon={FaLock} required={true} />
                </Form>
            </MainSign>
        </>
    );
}
export default SignIn;