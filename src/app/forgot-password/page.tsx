"use client"
import './forgotPassword.css'
import Footer from "app/components/Footer/Footer";
import Form from 'app/components/General-form/Form';
import Header from "app/components/Header/Header";
import Button from 'app/components/UI/Button/Button';
import Input from 'app/components/UI/Input/Input';
import { forgotPassword } from 'app/services/forgotPassword';
import { IForgotPassword } from 'app/types/IForgotPassword';
import Image from 'next/image';
import Link from "next/link";


const ForgotPassword = ()=>{

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement).entries());
        const forgotPasswordResponse = await forgotPassword(formData as unknown as IForgotPassword)
        console.log(forgotPasswordResponse);
    }

    return(
        <>
            <Header>
                <li> <Link href="/">Inicio</Link> </li>
            </Header>

            <main className='forgot-password__main'>

            <Form
                    onSubmit={handleSubmit}
                    headerContent={
                        <>
                            <Image src="/img/padlock.png" alt="logo-parkingNow" width={200} height={140}></Image>
                            <p>¿Problemas para iniciar sesión?
                            <p></p>Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.</p>
                        </>
                    }
                    // title="Iniciar Sesión"
                    footerContent={
                            <Button text={"Enviar enlace"}/>
                    }
                >
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="pepito@micorreo.com" name={"email"} required={true} />
                
                </Form>
            </main>

            <Footer/>
        </>
    )
}

export default ForgotPassword;