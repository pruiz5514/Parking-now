"use client";
import "./reset-password.css"
import Form from "app/components/General-form/Form";
import { FormSpan } from "app/components/General-form/Form-style";
import Button from "app/components/UI/Button/Button";
import Input from "app/components/UI/Input/Input";
import { resetPassword } from "app/services/resetPassword";
import { IResetPassword } from "app/types/IForgotPassword";
import { successAlert } from "app/utils/alerts";
import { checkPassword, checkPasswordCoincidence } from "app/utils/signUp";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import SearchParams from "./search-param";

const TokenPassword = ()=>{
    const router = useRouter(); 

    const [token, setToken] = useState('');
    
    const initialState = {
        password: '',
        confirmPassword: '',
    };
    const [values, setValues] = useState(initialState);
    const [confirmPassword, setConfirmPassword] = useState(true);
    const [passwordSecurity, setPasswordSecurity] = useState(true);

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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>)=>{
        const {name , value} = event?.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        if(confirmPassword && passwordSecurity){
            const body = {
                resetPasswordToken: token,
                password: values.password,
            }
            console.log(body);
            
            try{
                const response = await resetPassword(body); 
                successAlert("Se actualizo la contraseña exitosamente");
                setValues(initialState);
                router.push("/");                
            }catch(e){
                console.log(e);
            }
        }
    }
    return(
        <>
            <main className='reset-password__main'>
            <Suspense fallback={<p>Obteniendo informacion</p>}>
                <SearchParams setToken={setToken} /> 
            </Suspense>
                <Form
                    onSubmit={handleSubmit}
                    headerContent={
                        <>
                            <Image src="/img/padlock.png" alt="logo-parkingNow" width={200} height={140}></Image>
                            <p className='reset-password_p'>Ingresa la nueva contraseña</p>
                        </>
                    }
                    // title="Iniciar Sesión"
                    footerContent={
                            <Button text={"Restablecer contraseña"}/>
                    }
                >
                    <Input label="Contraseña" id="forgotPasswordPassword" type="password" placeholder="Contraseña" name={"password"} onChange={passwordHandleChange} required={true} />
                    {!passwordSecurity ? (<FormSpan >La contraseña debe tener al menos una minúscula, una mayúscula, un carácter especial y un número, y debe ser de al menos 8 dígitos.</FormSpan>):""}
                    <Input label="Confirmar contraseña" id="forgotPasswordConfirm" type="password" placeholder="Confirmar contraseña" name={"confirmPassword"} onChange={confirmPasswordHandleChange} required={true} />
                    {!confirmPassword ? (<FormSpan >Las contraseñas no coinciden.</FormSpan>):""}
                    <Input id="forgotPasswordToken" type="hidden" name="token"/>
                </Form>
            </main>
        </>
    )
}

export default TokenPassword;