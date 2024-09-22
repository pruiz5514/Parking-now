"use client"

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Image from "next/image";
import Form from "app/components/General-form/Form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { MainSign } from "../General-form/Form-style";
import { useState } from "react";
import { ILogin } from "app/types/ILogin";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { updateUserData } from "app/redux/features/userSlice";
import { login } from "app/services/loginUser";
import Cookies from 'js-cookie';
import Link from "next/link";
import { Label } from "../UI/Input/Input-style";


const initialState = {
    email:'',
    password: ''
}
const SignIn: React.FC = () => {
    const userInformation = useAppSelector(state => state.userReducer.userData);
    const dispatch = useAppDispatch();

    const [values, setValues] = useState<ILogin>(initialState);
    const router = useRouter(); 


    const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>)=>{
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        try{
            const user = await login(values);
            dispatch(updateUserData(user));
            Cookies.set("token", user.token, {
                path: "/",
                sameSite: "strict"
            })
            router.push("/parkings")
            if(values.email === "admin@example.com"){
                sessionStorage.setItem("admin", values.email);
            }
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
                        <div style={{display:'flex', flexDirection:'column', gap:'15px', alignItems:'center'}}>
                            <Button text={"Ingresar"}/>
                            <Link href="/forgot-password"><Label>Olvide la contraseña</Label></Link>
                        </div>
                        
                    }
                    onSubmit={handleSubmit}
                >
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="juan@parkingnow.com" name={"email"} value={values.email} onChange={handleChange} icon={FaEnvelope} required={true} />
                    <Input label="Contraseña" id="userPassword" type="password" placeholder="Ingresa tu contraseña" name={"password"} value={values.password} onChange={handleChange} icon={FaLock} required={true} />
                </Form>
                
            </MainSign>
        </>
    );
}
export default SignIn;