"use client"

import React, { forwardRef } from "react";
import Button from "../UI/Button/Button"
import TextArea from "../UI/TextArea/TextArea"
import Input from "../UI/Input/Input"
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa"
import Form from "../General-form/Form"
import { FormContactStyled, Title, TextPurpose } from "./Contact-us-style";



interface ContactProps {
    id: string;
    ref?: React.RefObject<HTMLFormElement>;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

const FormContactUs = forwardRef<HTMLFormElement, ContactProps>(
    ({ id, onSubmit }, ref) => {
        return (
            <FormContactStyled id={id}>
                <div>
                    <Title>PROPÓSITO</Title>
                    <TextPurpose>El propósito de la aplicación <b>Parking Now</b> es optimizar la experiencia de estacionamiento al facilitar la búsqueda, reserva de espacios de parqueo de manera eficiente, segura y conveniente para los conductores, al mismo tiempo que maximiza la utilización y rentabilidad de los espacios de estacionamiento.
                    </TextPurpose>
                </div>

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
            </FormContactStyled>
        )
    });
FormContactUs.displayName = "FormContactUs";
export default FormContactUs;