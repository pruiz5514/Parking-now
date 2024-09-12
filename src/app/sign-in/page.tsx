"use client"

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Link from "next/link";
import Image from "next/image";
import Form from "app/components/General-form/Form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { MainSign } from "../../components/General-form/Form-style";

const SignIn: React.FC = () => {
    return (
        <>
            <MainSign>
                <Form
                    headerContent={
                        <>
                            <Image src="/img/LOGO3.png" alt="logo-parkingNow" width={200} height={140}></Image>
                        </>
                    }
                    title="Iniciar Sesión"
                    footerContent={
                        <Link href="./parkings"><Button text={"Ingresar"} /></Link>
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