"use client"

import Button from "../UI/Button/Button"
import TextArea from "../UI/TextArea/TextArea"
import Input from "../UI/Input/Input"
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa"
import Form from "../General-form/Form"

const FormContactUs: React.FC = () => {
    return (
        <Form
            title="CONTACTANOS"
            footerContent={
                <>
                    <Button text={"ENVIAR"} />
                </>
            }
        >
            <Input label="Nombre completo" id="userNameContacUs" type="text" placeholder="Ingresa tu nombre" icon={FaUser} required={true} />
            <Input label="Número de teléfono" id="userPhoneContacUs" type="number" placeholder="Ingresa tu número de contacto" icon={FaPhone} required={true} />
            <Input label="Correo electrónico" id="userAddressEmailContacUs" type="email" placeholder="Ingresa tu dirección de correo" icon={FaEnvelope} required={true} />
            <TextArea id="textareaMsnContactUs" label="Mensaje"></TextArea>
        </Form>
    )
}

export default FormContactUs;