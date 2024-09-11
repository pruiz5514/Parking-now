"use client"

import Link from "next/link";
import Image from "next/image";
import Input from "app/components/UI/Input/Input";
import Button from "app/components/UI/Button/Button";
import Form from "app/components/General-form/Form";
import { FaEnvelope, FaHome, FaIdCard, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { MainSign } from "../../components/General-form/Form-style";

const SignUp: React.FC = () => {
    return (
        <>
            <MainSign>
                <Form
                    headerContent={
                        <>
                            <Link href="/"><Image src="/img/LOGO3.png" alt="logo-parkingNow" width={280} height={140}></Image></Link>
                        </>
                    }
                    title="Registro"
                    footerContent={
                        <>
                            <Button text={"Crear cuenta"} />
                        </>
                    }
                >
                    <Input label="Nombre completo" id="userName" type="text" placeholder="Ingresa tu nombre" icon={FaUser} required={true} />
                    <Input label="Número de cédula" id="userId" type="number" placeholder="1008001003" icon={FaIdCard} required={true} />
                    <Input label="Dirección de residencia" id="userAddressHome" type="text" placeholder=" mde cra 55 # 25-15 " icon={FaHome} required={true} />
                    <Input label="Número de contacto" id="userPhone" type="number" placeholder="123 456 14 25" icon={FaPhone} required={true} />
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="pepito@micorreo.com" icon={FaEnvelope} required={true} />
                    <Input label="Contraseña" id="userPassword" type="password" placeholder="Ingresa tu contraseña" icon={FaLock} required={true} />
                    <Input label="Confirmar contraseña" id="userPasswordConfirm" type="password" placeholder="Ingresa de nuevo contraseña" icon={FaLock} required={true} />
                </Form>
            </MainSign>
        </>
    );
}
export default SignUp;