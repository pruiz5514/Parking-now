"use client"

import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import './edit-parking.css';
import Form from "app/components/General-form/Form";
import Image from "next/image";
import { InputContainer, Label } from "app/components/UI/Input/Input-style";
import { SelectAddress } from "app/components/UI/Select/Select-style";
import TextArea from "app/components/UI/TextArea/TextArea";
import Input from "app/components/UI/Input/Input";
import { FaImage, FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { getParkingById, updateParking } from 'app/services/parkings'
import { IRegisterParking } from "app/types/IRegisterParking";
import Spinner from 'app/components/Spinner/Spinner'

const EditParking = () => {
    const [loading, setLoading] = useState(true)
    const [parking, setParking] = useState<IRegisterParking>()
    const searchParams = useSearchParams()
    const parkingId = searchParams.get('parkingId')

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement).entries())
        try {
            const data = await updateParking(parkingId!, formData as unknown as IRegisterParking)
            if (data) {
                (event.target as HTMLFormElement).reset()
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (parkingId === null) return
        const fetchData = async () => {
            const parking = await getParkingById(parkingId)
            setParking(parking.data[0])
            setLoading(false)
        }
        fetchData()
    }, [parkingId])

    if (loading) return <Spinner />

    return (
        <>
            <main className="edit-parking-main">
                <section className="edit-parkingForm-container">
                    <Form onSubmit={onFormSubmit}
                        headerContent={
                            <>
                                <Image src="/img/LOGO3.png" alt="logo-parkingNow" width={200} height={140}></Image>
                            </>
                        }
                        title="Editar Parqueadero"
                        footerContent={
                            <Button text={"Guardar"} type="submit" />
                        }
                    >
                        <Input name="name" label="Nombre de la propiedad" id="nameParking" type="text" icon={FaTag} placeholder="La Colina" required={true} defaultValue={parking?.name} />
                        <InputContainer>
                            <Label htmlFor="location-select">Barrio o Municipio</Label>
                            <SelectAddress name="commune_id" id="location-select" defaultValue={parking?.commune_id}>
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
                        <Input name="address" label="Dirección " id="userAddressParking" type="text" icon={FaMapMarkerAlt} placeholder="Cll 16 #55-129" required={true} defaultValue={parking?.address} />
                        <Input name="image_url" label="Imagen parqueadero " id="userImageParking" type="url" icon={FaImage} placeholder="https://riwi.io/wp-content/uploads/2023/07/Fondo-claro-logo2-1.png" required={true} defaultValue={parking?.image_url} />
                        <TextArea name="description" id="textareaDescriptionParking" label="Descripción Parqueadero" defaultValue={parking?.description} ></TextArea>
                    </Form>
                </section>

                <section className="container-slots">
                    <div className="container-slot">
                        celdas
                    </div>
                    <div className="container-slot">
                        celdas
                    </div>
                    <div className="container-slot">
                        celdas
                    </div>
                    <div className="container-slot">
                        celdas
                    </div>
                </section>

                <div className="container-button">
                    <Link href="/register-parking" style={{ width: '650px' }}> <Button text={"Agregar Celda"} /></Link>
                </div>
            </main>
        </>
    )
};

export default EditParking;