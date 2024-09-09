"use client"

import { HiOutlineMail } from "react-icons/hi"
import { FormBody,  FormContainerButton,  FormHeader, H1Form } from "../Sign-up/Sign-up-style"
import Button from "../UI/Button/Button"
import TextArea from "../UI/TextArea/TextArea"
import { MdOutlinePersonOutline } from "react-icons/md"
import { LuPhoneCall } from "react-icons/lu"
import { InputContainer } from "../UI/Input/Input-style"
import Input from "../UI/Input/Input"
import { FormContainerContactUs } from "./Contact-us-style"

const FormContactUs: React.FC =() => {
    return (
        <FormContainerContactUs>
            <FormHeader>
                <H1Form>CONTACTANOS</H1Form>
            </FormHeader>
            <FormBody>
                <InputContainer>
                    <Input label= "Nombre completo" id="userNameContacUs"  type="text" placeholder="Ingresa tu nombre" icon={MdOutlinePersonOutline} required={true}/>
                    <Input label= "Número de teléfono" id="userPhoneContacUs"  type="number" placeholder="Ingresa tu número de contacto" icon={LuPhoneCall} required={true}/>
                    <Input label= "Correo electrónico" id="userAddressEmailContacUs"  type="email" placeholder="Ingresa tu dirección de correo"  icon={HiOutlineMail} required={true}/>
                </InputContainer>
                <TextArea id="textareaMsnContactUs" label="Mensaje"></TextArea>
            </FormBody>
            <FormContainerButton>
                <Button text={"ENVIAR"}/>
            </FormContainerButton>
        </FormContainerContactUs>
    )
}

export default FormContactUs;