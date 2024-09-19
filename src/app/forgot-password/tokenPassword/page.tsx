"use client";

import Form from "app/components/General-form/Form";
import Button from "app/components/UI/Button/Button";
import Input from "app/components/UI/Input/Input";
import Image from "next/image";

const TokenPassword = ()=>{
    return(
        <>
            <main className='forgot-password__main'>

                <Form
                    // ref={formRef}
                    // onSubmit={handleSubmit}
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
                    <Input label="Correo electrónico" id="forgotPasswordEmail" type="email" placeholder="pepito@micorreo.com" name={"email"} required={true} />
                    <Input id="forgotPasswordToken" type="hidden" name="token"/>
                
                </Form>
            </main>
        </>
    )
}

export default TokenPassword;