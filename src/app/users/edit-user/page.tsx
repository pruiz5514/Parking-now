"use client"
import Form from 'app/components/General-form/Form';
import './editUser.css'
import Image from 'next/image';
import { FaEnvelope, FaHome, FaIdCard, FaLock, FaPhone, FaUser } from "react-icons/fa";
import Button from 'app/components/UI/Button/Button';
import Input from "app/components/UI/Input/Input";
import { InputContainer, Label } from 'app/components/UI/Input/Input-style';
import { SelectAddress } from 'app/components/UI/Select/Select-style';
const EditUser = ()=>{

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
                >
                    <Input label="Nombre completo" id="userName" type="text" placeholder="Ingresa tu nombre" name={"fullname"}   icon={FaUser} required={true} />
                    <InputContainer>
                        <Label htmlFor="type-document-id">Tipo de documento</Label>
                        <SelectAddress name={"document_type_id"} id={"type-document-id"} >
                            <option value={""} selected disabled></option>
                            <option value={1}>Cédula</option>
                            <option value={2}>Pasaporte</option>
                            <option value={3}>NIT</option>
                            <option value={4}>TI</option>
                            <option value={5}>Cédula de Extranjería</option>
                        </SelectAddress>
                    </InputContainer>
                    <Input label="Número de documento" id="userId" type="number" placeholder="1008001003" name={"doc_number"} icon={FaIdCard} required={true} />
                    <Input label="Dirección de residencia" id="userAddressHome" type="text" placeholder=" mde cra 55 # 25-15 " name={"address"} icon={FaHome} required={true} />
                    <Input label="Teléfono" id="userPhone" type="number" placeholder="123 456 14 25" name={"phone_number"} icon={FaPhone} required={true} />
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="juan@parkingnow.com" name={"email"} icon={FaEnvelope} required={true} />
                </Form>
            </main>
        </>
    )
}

export default EditUser;