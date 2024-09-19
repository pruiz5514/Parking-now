"use client"
import './forgotPassword.css'
import Footer from "app/components/Footer/Footer";
import Form from 'app/components/General-form/Form';
import Header from "app/components/Header/Header";
import Button from 'app/components/UI/Button/Button';
import Input from 'app/components/UI/Input/Input';
import Image from 'next/image';
import Link from "next/link";


const ForgotPassword = ()=>{
    return(
        <>
            <Header>
                <li> <Link href="/">Inicio</Link> </li>
            </Header>

            <main className='forgot-password__main'>

            <Form
                    headerContent={
                        <>
                            <Image src="/img/LOGO3.png" alt="logo-parkingNow" width={200} height={140}></Image>
                        </>
                    }
                    // title="Iniciar Sesión"
                    footerContent={
                            <Button text={"Ingresar"}/>
                    }
                >
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="pepito@micorreo.com" name={"email"} required={true} />
                    <Input label="Contraseña" id="userPassword" type="password" placeholder="Ingresa tu contraseña" name={"password"}  required={true} />
                </Form>
            </main>

            <Footer/>
        </>
    )
}

export default ForgotPassword;