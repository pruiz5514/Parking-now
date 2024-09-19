"use client"
import './forgotPassword.css'
import Footer from "app/components/Footer/Footer";
import Form from 'app/components/General-form/Form';
import Header from "app/components/Header/Header";
import Button from 'app/components/UI/Button/Button';
import Input from 'app/components/UI/Input/Input';
import { forgotPassword } from 'app/services/forgotPassword';
import { IForgotPassword } from 'app/types/IForgotPassword';
import { sendEmail } from 'app/utils/sendEmail';
import Image from 'next/image';
import Link from "next/link";
import { useRef, useState } from 'react';


const ForgotPassword = ()=>{
    const initialState = {
        email: ''
    }
    const [values, setValues] = useState(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>)=>{
        const {name , value} = event?.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        try{
            const forgotPasswordResponse = await forgotPassword(values)
            const token = forgotPasswordResponse.userResetPasswordToken;
            sendEmail(formRef, 'service_z3c311w', 'template_ics70j7', 'T21kkOiMTWkTwlvRn', "Correo enviado exitosamente",token);
            setValues(initialState);
        }catch(e){
            console.log(e);
        }
    }

    return(
        <>

            <main className='forgot-password__main'>

            <Form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    headerContent={
                        <>
                            <Image src="/img/padlock.png" alt="logo-parkingNow" width={200} height={140}></Image>
                            <h2 className='forgot-password_h2'>¿Problemas para iniciar sesión?</h2>
                            <p className='forgot-password_p'>Ingresa tu correo electrónico y te enviaremos un enlace para que recuperes el acceso a tu cuenta.</p>
                        </>
                    }
                    // title="Iniciar Sesión"
                    footerContent={
                            <Button text={"Enviar enlace"}/>
                    }
                >
                    <Input label="Correo electrónico" id="forgotPasswordEmail" type="email" placeholder="pepito@micorreo.com" value={values.email} name={"email"} onChange={handleChange} required={true} />
                    <Input id="forgotPasswordToken" type="hidden" name="token"/>
                
                </Form>
            </main>
        </>
    )
}

export default ForgotPassword;