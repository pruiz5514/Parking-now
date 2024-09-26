"use client"

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Image from "next/image";
import { InputContainer, Label } from "app/components/UI/Input/Input-style";
import { FaImage, FaMapMarkerAlt, FaTag } from "react-icons/fa";
import TextArea from "app/components/UI/TextArea/TextArea";
import Form from "app/components/General-form/Form";
import { MainRegParking } from "./register-parking-style";
import { SelectAddress } from "app/components/UI/Select/Select-style";
import { createParking } from "app/services/parkings";
import { IRegisterParking } from "app/types/IRegisterParking";
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
import { useState } from "react";


const RegisterParking: React.FC = () => {
    const [isUploadingImage, setIsUploadingImage] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const router = useRouter()
    const cookieToken = Cookies.get("token");

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(isUploadingImage === true) return

        const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement).entries())

        formData.image_url = imageUrl
        delete formData.file
        try {
            if (cookieToken) {
                const data = await createParking(formData as unknown as IRegisterParking, cookieToken)
                if (data) {
                    (event.target as HTMLFormElement).reset()
                    router.push(`/register-parking/${data.data.id}/register-slots`)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileInput = event.target
        if (fileInput?.files?.length === 0) return
        const file = fileInput?.files?.[0]
        const imageForm = new FormData()
        imageForm.append('file', file!)

        try {
            setIsUploadingImage(true)
            const imageUrlResponse = await fetch(`${process.env.BACK_HOST}/api/uploads`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`
                },
                body: imageForm
            })

            if(!imageUrlResponse.ok) {
                throw new Error('Hubo un error cargando la imagen')
            }

            const imageUrlData = await imageUrlResponse.json()
            const url = imageUrlData.data.url
            setImageUrl(url)
        } catch (error: unknown) {
            console.error(error)
        } finally {
            setIsUploadingImage(false)
        }

    }

    return (
        <>
            <MainRegParking>
                <Form onSubmit={onFormSubmit}
                    headerContent={
                        <>
                            <Image src="/img/LOGO3.png" alt="logo-parkingNow" width={200} height={140}></Image>
                        </>
                    }
                    title="Registro Parqueadero"
                    footerContent={
                        <Button text={"Siguiente"} disabled={isUploadingImage} />
                    }
                >
                    <Input name="name" label="Nombre de la propiedad" id="nameParking" type="text" icon={FaTag} placeholder="La Colina" required={true} />
                    <InputContainer>
                        <Label htmlFor="location-select">Barrio o Municipio</Label>
                        <SelectAddress name="commune_id" id="location-select" defaultValue={0}>
                            <option value={0} disabled></option>
                            <option value={1}>Popular</option>
                            <option value={2}>Santa Cruz</option>
                            <option value={3}>Manrique</option>
                            <option value={4}>Aranjuez</option>
                            <option value={5}>Castilla</option>
                            <option value={6}>Doce de Octubre</option>
                            <option value={7}>Robledo</option>
                            <option value={8}>Villa Hermosa</option>
                            <option value={9}>Buenos Aires</option>
                            <option value={10}>La Candelaria</option>
                            <option value={11}>Laureles-Estadio</option>
                            <option value={12}>La América</option>
                            <option value={13}>San Javier</option>
                            <option value={14}>El Poblado</option>
                            <option value={15}>Guayabal</option>
                            <option value={16}>Belén</option>
                            <option value={17}>Copacabana</option>
                            <option value={18}>Bello</option>
                            <option value={19}>Itagüí</option>
                            <option value={20}>Sabaneta</option>
                            <option value={21}>Envigado</option>
                            <option value={22}>La Estrella</option>
                            <option value={23}>Caldas</option>
                            <option value={24}>Girardota</option>
                            <option value={25}>Barbosa</option>
                        </SelectAddress>
                    </InputContainer>
                    <Input name="address" label="Dirección " id="userAddressParking" type="text" icon={FaMapMarkerAlt} placeholder="Cll 16 #55-129" required={true} />
                    {/* <Input name="image_url" label="Imagen parqueadero " id="userImageParking" type="url" icon={FaImage} placeholder="https://riwi.io/wp-content/uploads/2023/07/Fondo-claro-logo2-1.png" required={true} /> */}
                    <input type="file" name="file" onChange={onFileChange} />
                    <TextArea name="description" id="textareaDescriptionParking" label="Descripción Parqueadero"></TextArea>
                </Form>
            </MainRegParking>
        </>
    );
}
export default RegisterParking;