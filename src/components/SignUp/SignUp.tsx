"use client"

import Image from "next/image";
import Input from "app/components/UI/Input/Input";
import Button from "app/components/UI/Button/Button";
import Form from "app/components/General-form/Form";
import { FaEnvelope, FaHome, FaIdCard, FaLock, FaPhone, FaUser } from "react-icons/fa";
import { FormSpan, MainSign } from "../General-form/Form-style";
import { InputContainer, Label } from "app/components/UI/Input/Input-style";
import { SelectAddress } from "app/components/UI/Select/Select-style";
import { useState } from "react";
import { IRegisterUser, IRegisterUserValidation } from "app/types/IRegisterUser";
import { checkPassword, checkPasswordCoincidence } from "app/utils/signUp";
import { createUser } from "app/services/registerUser";

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
    
    const [values, setValues] = useState<IRegisterUserValidation>(initialState);

    const [passwordSecurity, setPasswordSecurity] = useState(true);

    const [confirmPassword, setConfirmPassword] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>)=>{
        const {name , value} = event?.target;
        setValues({
            ...values,
            [name]:value
        })
    };

    const passwordHandleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>)=>{
        handleChange(event);
        const checkPasswordSecurity = checkPassword(event.target.value)
        setPasswordSecurity(checkPasswordSecurity);
    }

    const confirmPasswordHandleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>)=>{
        handleChange(event);
        const checkConfirmPassword = checkPasswordCoincidence(values.password,event.target.value);
        setConfirmPassword(checkConfirmPassword);
    }

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const passwordCoincidence = checkPasswordCoincidence(values.password,values.confirmPassword);
        const passwordSecurity = checkPassword(values.password);

        if(passwordCoincidence && passwordSecurity){
            try{
                const newUser: IRegisterUser ={
                    fullname: values.fullname,
                    document_type_id: Number(values.document_type_id),
                    doc_number: values.doc_number,
                    address: values.address,
                    phone_number: values.phone_number,
                    email: values.email,
                    password: values.password,
                }
                await createUser(newUser);
            }catch(e){
                console.log(e);
            }
        }
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
                            <option value={0} selected disabled></option>
                            <option value={1}>Cédula</option>
                            <option value={2}>Pasaporte</option>
                            <option value={3}>NIT</option>
                            <option value={4}>TI</option>
                            <option value={5}>Cédula de Extranjería</option>
                        </SelectAddress>
                    </InputContainer>
                    <Input label="Número de documento" id="userId" type="number" placeholder="1008001003" name={"doc_number"} onChange={handleChange} icon={FaIdCard} required={true} />
                    <Input label="Dirección de residencia" id="userAddressHome" type="text" placeholder=" mde cra 55 # 25-15 " name={"address"} onChange={handleChange} icon={FaHome} required={true} />
                    <Input label="Teléfono" id="userPhone" type="number" placeholder="123 456 14 25" name={"phone_number"} onChange={handleChange} icon={FaPhone} required={true} />
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="pepito@micorreo.com" name={"email"} onChange={handleChange} icon={FaEnvelope} required={true} />
                    <Input label="Contraseña" id="userPassword" type="password" placeholder="Ingresa tu contraseña" name={"password"} onChange={passwordHandleChange} icon={FaLock} required={true} />
                    {!passwordSecurity ? (<FormSpan >La contraseña debe tener al menos una minúscula, una mayúscula, un carácter especial y un número, y debe ser de al menos 8 dígitos.</FormSpan>):""}
                    <Input label="Confirmar contraseña" id="userPasswordConfirm" type="password" placeholder="Ingresa de nuevo contraseña" name={"confirmPassword"} onChange={confirmPasswordHandleChange} icon={FaLock} required={true} />
                    {!confirmPassword ? (<FormSpan >Las contraseñas no coinciden.</FormSpan>):""}
                </Form>
            </MainSign>
        </>
    );
}
export default SignUp;