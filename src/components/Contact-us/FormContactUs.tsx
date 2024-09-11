"use client"

import React, { forwardRef } from "react";
import Button from "../UI/Button/Button"
import TextArea from "../UI/TextArea/TextArea"
import Input from "../UI/Input/Input"
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa"
import Form from "../General-form/Form"

interface ContactProps {
    id: string;
    ref? : React.RefObject<HTMLFormElement>;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

const FormContactUs = forwardRef<HTMLFormElement, ContactProps>(
    ({ id, onSubmit }, ref) => {
    return (
        <div id={id}>
         <Form ref={ref} onSubmit={onSubmit}
            title="CONTACTANOS"
            footerContent={
                <>
                    <Button text={"Enviar"} />
                </>
            }
        >
            <Input label="Nombre completo" id="userNameContacUs" type="text" placeholder="Ingresa tu nombre" icon={FaUser} name="name" required={true} />
            <Input label="Número de teléfono" id="userPhoneContacUs" type="number" placeholder="Ingresa tu número de contacto" name="phone" icon={FaPhone} required={true} />
            <Input label="Correo electrónico" id="userAddressEmailContacUs" type="email" placeholder="Ingresa tu dirección de correo" name="email" icon={FaEnvelope} required={true} />
            <TextArea id="textareaMsnContactUs" label="Mensaje" name="message"></TextArea>
        </Form>
        </div>
       
    )
});
FormContactUs.displayName = "FormContactUs";
export default FormContactUs;