"use client"

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Image from "next/image";
import Form from "app/components/General-form/Form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { MainSign } from "../General-form/Form-style";
import { useState } from "react";
import { ILogin } from "app/types/ILogin";
import { login } from "app/services/loginUser";
import { useRouter } from "next/router";

const initialState = {
    email:'',
    password: ''
}
const SignIn: React.FC = () => {
    const [values, setValues] = useState<ILogin>(initialState);
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>)=>{
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        try{
            login(values);
            router.push("/parkings")
        }catch(e){
            console.log(e);
            setValues(initialState);
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
                    title="Iniciar Sesión"
                    footerContent={
                        <Button text={"Ingresar"}/>
                    }
                    onSubmit={handleSubmit}
                >
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="pepito@micorreo.com" name={"email"} value={values.email} onChange={handleChange} icon={FaEnvelope} required={true} />
                    <Input label="Contraseña" id="userPassword" type="password" placeholder="Ingresa tu contraseña" name={"password"} value={values.password} onChange={handleChange} icon={FaLock} required={true} />
                </Form>
            </MainSign>
        </>
    );
}
export default SignIn;