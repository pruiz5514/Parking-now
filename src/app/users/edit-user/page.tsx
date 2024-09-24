"use client"
import Form from 'app/components/General-form/Form';
import './editUser.css'
import Image from 'next/image';
import { FaEnvelope, FaHome, FaIdCard, FaLock, FaPhone, FaUser } from "react-icons/fa";
import Button from 'app/components/UI/Button/Button';
import Input from "app/components/UI/Input/Input";
import { InputContainer, Label } from 'app/components/UI/Input/Input-style';
import { SelectAddress } from 'app/components/UI/Select/Select-style';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { editUser, getUserById } from 'app/services/users';
import { IUpdateUser } from 'app/types/IUsers';
import { successAlert } from 'app/utils/alerts';


const EditUser = ()=>{
    const router = useRouter()

    const cookieToken = Cookies.get("token");
    const searchParams = useSearchParams();
    const userId = searchParams.get("editUser");

    const initialState = {
        fullname: '',
        document_type_id: 0,
        doc_number: '',
        address: '',
        phone_number: '',
        email: '',
        role_id: 0, 
        password: ''
    };

    const [user, setUser] = useState<IUpdateUser>(initialState);

    useEffect(()=>{
        const getUser = async ()=>{
            if(cookieToken && userId){
                try{
                    const userById = await getUserById(cookieToken, userId);
                    setUser(userById)
                }catch(e){
                    console.log(e);
                }
            }
        }
        getUser();
    },[])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>)=>{
        const {name , value} = event?.target;
        setUser({
            ...user,
            [name]:value
        })
    };

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(cookieToken && userId){
            try{
                const editedUser = {
                    fullname: user.fullname,
                    document_type_id: Number(user.document_type_id),
                    doc_number: user.doc_number,
                    address: user.address,
                    phone_number: user.phone_number,
                    email: user.email,
                    role_id: user.role_id, 
                    password: user.password
                }
                console.log(editedUser)
                await editUser(cookieToken, userId, editedUser)
                successAlert("Usuario editado exitosamente");
                router.push("/users");
            }catch(e){
                console.log(e);
            }
        } 
    }
    
    return(
        <>
            <main className="edit-user_main">
            <Form 
                    headerContent={
                        <>
                            <Image src="/img/LOGO3.png" alt="logo-parkingNow" width={200} height={140}></Image>
                        </>
                    }
                    title="Editar usuario"
                    footerContent={
                        <>
                            <Button text={"Editar usuario"}/>
                        </>
                    }
                    onSubmit={onFormSubmit}
                >
                    <Input label="Nombre completo" id="userName" type="text" placeholder="Ingresa tu nombre" name={"fullname"} value={user.fullname} onChange={handleChange}  icon={FaUser} required={true} />
                    <InputContainer>
                        <Label htmlFor="type-document-id">Tipo de documento</Label>
                        <SelectAddress name={"document_type_id"} id={"type-document-id"} value={user.document_type_id} onChange={handleChange}>
                            <option value={""} selected disabled></option> 
                            <option value={1}>Cédula</option>
                            <option value={2}>Pasaporte</option>
                            <option value={3}>NIT</option>
                            <option value={4}>TI</option>
                            <option value={5}>Cédula de Extranjería</option>
                        </SelectAddress>
                    </InputContainer>
                    <Input label="Número de documento" id="userId" type="number" placeholder="1008001003" name={"doc_number"} value={user.doc_number} onChange={handleChange} icon={FaIdCard} required={true} />
                    <Input label="Dirección de residencia" id="userAddressHome" type="text" placeholder=" mde cra 55 # 25-15" value={user.address} onChange={handleChange} name={"address"} icon={FaHome} required={true} />
                    <Input label="Teléfono" id="userPhone" type="number" placeholder="123 456 14 25" name={"phone_number"} value={user.phone_number} onChange={handleChange} icon={FaPhone} required={true} />
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="juan@parkingnow.com" value={user.email} onChange={handleChange} name={"email"} icon={FaEnvelope} required={true} />
                </Form>
            </main>
        </>
    )
}

export default EditUser;