"use client"

import Image from "next/image";
import Input from "app/components/UI/Input/Input";
import Button from "app/components/UI/Button/Button";
import Form from "app/components/General-form/Form";
import { FaEnvelope, FaHome, FaIdCard, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { MainSign } from "../General-form/Form-style";
import { InputContainer, Label } from "app/components/UI/Input/Input-style";
import { SelectAddress } from "app/components/UI/Select/Select-style";
import { useState } from "react";
import { IRegisterUser } from "app/types/IRegisterUser";

const initialState = {
    fullname: '',
    document_type_id: null,
    doc_number: '',
    address: '',
    phone_number: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp: React.FC = () => {

    const [values, setValues] = useState<IRegisterUser>(initialState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>)=>{
        const {name , value} = event?.target;
        setValues({
            ...values,
            [name]:value
        })
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(values);
    }

    
    return (
        <>
            <MainSign>
                <Form 
                    headerContent={
                        <>
                            <Image src="/img/LOGO3.png" alt="logo-parkingNow" width={200} height={140}></Image>
                        </>
                    }
                    title="Registro"
                    footerContent={
                        <>
                            <Button text={"Crear cuenta"}/>
                        </>
                    }
                    onSubmit={handleSubmit}
                >
                    <Input label="Nombre completo" id="userName" type="text" placeholder="Ingresa tu nombre" name={"fullname"} onChange={handleChange}  icon={FaUser} required={true} />
                    <InputContainer>
                        <Label htmlFor="type-document-id">Tipo de documento</Label>
                        <SelectAddress name={"document_type_id"} id={"type-document-id"} onChange={handleChange}>
                            <option value="" selected disabled></option>
                            <option value="cedula">Cédula</option>
                            <option value="pasaporte">Pasaporte</option>
                            <option value="nit">NIT</option>
                            <option value="ti">TI</option>
                            <option value="cedula_extranjeria">Cédula de Extranjería</option>
                        </SelectAddress>
                    </InputContainer>
                    <Input label="Número de documento" id="userId" type="number" placeholder="1008001003" name={"doc_number"} onChange={handleChange} icon={FaIdCard} required={true} />
                    <Input label="Dirección de residencia" id="userAddressHome" type="text" placeholder=" mde cra 55 # 25-15 " name={"address"} onChange={handleChange} icon={FaHome} required={true} />
                    <Input label="Teléfono" id="userPhone" type="number" placeholder="123 456 14 25" name={"phone_number"} onChange={handleChange} icon={FaPhone} required={true} />
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="pepito@micorreo.com" name={"email"} onChange={handleChange} icon={FaEnvelope} required={true} />
                    <Input label="Contraseña" id="userPassword" type="password" placeholder="Ingresa tu contraseña" name={"password"} onChange={handleChange} icon={FaLock} required={true} />
                    <Input label="Confirmar contraseña" id="userPasswordConfirm" type="password" placeholder="Ingresa de nuevo contraseña" name={"confirmPassword"} onChange={handleChange} icon={FaLock} required={true} />
                </Form>
            </MainSign>
        </>
    );
}
export default SignUp;