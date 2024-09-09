"use client"

import Input from "../../components/UI/Input/Input";
import { HiCurrencyDollar } from "react-icons/hi";
import Button from "../../components/UI/Button/Button";
import { FormBody, FormContainer, FormContainerButton, FormFooter, FormHeader, H1Form, SelectAddress, SpanForm } from "../sign-up/Sign-up-style";
import Link from "next/link";
import Image from "next/image";
import { MdDriveFileRenameOutline, MdOutlinePersonOutline } from "react-icons/md";
import Select from "app/components/UI/Select/Select";
import { Label } from "app/components/UI/Input/Input-style";
import { GoImage } from "react-icons/go";
import { FaCarSide, FaMotorcycle } from "react-icons/fa";
import TextArea from "app/components/UI/TextArea/TextArea";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import ToggleSwitch from "app/components/Switch/Switch";
import Header from "app/components/Header/Header";

const registerParking: React.FC = () => {
    return (
        <>
        <Header>
            <li> <a href="">Inicio</a> </li>
            <li> <Button text={"Cerrar sesión"} /></li>
        </Header>
        <FormContainer>
            <FormHeader>
                <Link href ="/"><Image src="/img/LOGO3.png" alt="logo-parkingNow" width={280} height={140}></Image></Link>
                <H1Form>Registro Parqueadero</H1Form>
            </FormHeader>
            <FormBody>
                <Input label= "Nombre" id="userAddressEmailSignIn"  type="text" icon={MdOutlinePersonOutline} required={true}/>
                <Label htmlFor="location-select">Ubicación</Label> 
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
                <Input label= "Dirección " id="userAddressParking"  type="text" icon={MdOutlinePersonOutline} placeholder="Cll 16 #55-129" required={true}/>
                <Input label= "Imagen parqueadero " id="userImageParking"  type="url" icon={GoImage} placeholder="https://riwi.io/wp-content/uploads/2023/07/Fondo-claro-logo2-1.png" required={true}/>
                <Input label= "Nombre parqueadero " id="nameParking"  type="text" icon={MdDriveFileRenameOutline} placeholder="La Colina" required={true}/>
                <TextArea id="textareaDescriptionParking" label="Descripción Parqueadero"></TextArea>
                <Input label= "Cantidad de celdas" id="amountCell"  type="number" icon={HiMiniSquares2X2}  required={true}/>
                <Input label= "Precio por hora" id="price-hour"  type="number" icon={HiCurrencyDollar}  required={true}/>

            <ToggleSwitch></ToggleSwitch>
            </FormBody>
            <FormContainerButton>
                <label id="typeMotoParking">Moto </label>
                <input id="typeMotoParking"  type="checkbox"  />
                <label id="typeCarParking">Carro </label>
                <input id="typeCarParking"  type="checkbox" />
            </FormContainerButton>
            
            <FormContainerButton>
                <Button text={"GUARDAR PARQUEADERO"}/>
            </FormContainerButton>
        </FormContainer>
        </>
    );
}
export default registerParking;