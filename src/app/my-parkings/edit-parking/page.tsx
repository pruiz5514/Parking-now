"use client"

import Footer from "app/components/Footer/Footer";
import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import './editParking.css';
import Form from "app/components/General-form/Form";
import Image from "next/image";
import { InputContainer, Label } from "app/components/UI/Input/Input-style";
import { SelectAddress } from "app/components/UI/Select/Select-style";
import TextArea from "app/components/UI/TextArea/TextArea";
import Input from "app/components/UI/Input/Input";
import { FaDollarSign, FaImage, FaMapMarkerAlt, FaTag, FaThLarge } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";

const EditParking = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <>
            <Header>
                <li><Link href="/parkings">Inicio</Link></li>
                <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                <li><Link href="/"><Button text={"Cerrar sesión"}/></Link></li>
            </Header>

            <main className="editParking-main">

                <section className="editParkingForm-container">
                    <Form
                            headerContent={
                                <>
                                    <Image src="/img/LOGO3.png" alt="logo-parkingNow" width={200} height={140}></Image>
                                </>
                            }
                            title="Registro Parqueadero"
                            footerContent={
                                <Link href="./register-parking/slots" style={{ width: '100%' }}> <Button text={"Siguiente"} /></Link>
                            }
                        >
                            <Input label="Nombre de la propiedad" id="nameParking" type="text" icon={FaTag} placeholder="La Colina" required={true} />
                            <InputContainer>
                                <Label htmlFor="location-select">Barrio o Municipio</Label>
                                <SelectAddress name={"location"} id={"location-select"}>
                                    <option value="" selected disabled></option>
                                    <option value="popular">Popular</option>
                                    <option value="santa-cruz">Santa Cruz</option>
                                    <option value="manrique">Manrique</option>
                                    <option value="aranjuez">Aranjuez</option>
                                    <option value="castilla">Castilla</option>
                                    <option value="doce-de-octubre">Doce de Octubre</option>
                                    <option value="robledo">Robledo</option>
                                    <option value="villa-hermosa">Villa Hermosa</option>
                                    <option value="buenos-aires">Buenos Aires</option>
                                    <option value="la-candelaria">La Candelaria</option>
                                    <option value="laureles-estadio">Laureles-Estadio</option>
                                    <option value="la-america">La América</option>
                                    <option value="san-javier">San Javier</option>
                                    <option value="el-poblado">El Poblado</option>
                                    <option value="guayabal">Guayabal</option>
                                    <option value="belen">Belén</option>
                                    <option value="copacabana">Copacabana</option>
                                    <option value="bello">Bello</option>
                                    <option value="itagui">Itagüí</option>
                                    <option value="sabaneta">Sabaneta</option>
                                    <option value="envigado">Envigado</option>
                                    <option value="la-estrella">La Estrella</option>
                                    <option value="caldas">Caldas</option>
                                    <option value="girardota">Girardota</option>
                                    <option value="barbosa">Barbosa</option>
                                </SelectAddress>
                            </InputContainer>
                            <Input label="Dirección " id="userAddressParking" type="text" icon={FaMapMarkerAlt} placeholder="Cll 16 #55-129" required={true} />
                            <Input label="Imagen parqueadero " id="userImageParking" type="url" icon={FaImage} placeholder="https://riwi.io/wp-content/uploads/2023/07/Fondo-claro-logo2-1.png" required={true} />
                            <TextArea id="textareaDescriptionParking" label="Descripción Parqueadero"></TextArea>
                            <Input label="Precio por hora" id="price-hour" type="number" icon={FaDollarSign} required={true} />
                            
                            <InputContainer>
                                <Label htmlFor="type-vehicle-select">Tipo de vehículo</Label>
                                <SelectAddress name={"location"} id={"type-vehicle-select"}>
                                    <option value="" selected disabled></option>
                                    <option value="carro">Carro</option>
                                    <option value="moto">Moto</option>
                                </SelectAddress>
                            </InputContainer>
                    </Form>
                </section>

                <section>
                    <button className="editSlotsTitle-container" onClick={()=> setIsOpen(!isOpen)}>
                        <h2>Editar celdas</h2> <GoChevronDown />
                    </button>

                    <article style={{display:isOpen ? 'flex' : 'none'}}>
                        <Form
                                footerContent={
                                    <>
                                        <Button text={"Guardar"} />
                                    </>
                                }
                            >
                                <Input label="¿Cuántas Celdas deseas agregar?" id="" type="number" icon={FaThLarge} required={true} />
                                {
                                    Array.from({ length: 2}, (_, index) => (
                                        <Input key={index} label={`Celda ${index + 1}`} id={`slot-${index + 1}`} type="text" placeholder={`Ingrese el nombre de la celda ${index + 1}`} icon={FaThLarge} required={true} />
                                    ))}
                        </Form>
                    </article>
                    
                </section>


            </main>



            <Footer/>
        </>
    )
};

export default EditParking;