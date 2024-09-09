"use client"
import Header from "app/components/Header/Header"
import Footer from "app/components/Footer/Footer"
import Link from "next/link"
import Button from "app/components/UI/Button/Button"
import { MainStyle, Title, ContainerDataBooking, ContainerDetailsBooking, ContainerInfoContact, ContainerInfoParking, TitleInfo, ContainerTime, ContainerDeatails, Text } from "./booking-style"
import Input from "app/components/UI/Input/Input"
import { MdOutlinePersonOutline } from "react-icons/md"
import { LuPhoneCall } from "react-icons/lu"
import { HiOutlineMail } from "react-icons/hi"
import { FaAddressCard } from "react-icons/fa"
import { RiHomeHeartLine } from "react-icons/ri"

const Booking = () => {
    return (
        <>
        <Header>
        <li><Link href={"/"}>Inicio</Link></li>
        <li><Button text={"Cerrar sesión"}/></li>
        </Header>
        <MainStyle>
            <ContainerDataBooking>
            <Title>Tu Reserva</Title>
            <ContainerInfoContact >
            <TitleInfo>Informacion del contacto</TitleInfo>
            <Input label= "Nombre completo" id="userName"  type="text" placeholder="Ingresa tu nombre" icon={MdOutlinePersonOutline} required={true}/>
            <Input label= "Número de contacto" id="userPhone"  type="number" placeholder="123 456 14 25" icon={LuPhoneCall} required={true}/>
            <Input label= "Correo electrónico" id="userAddressEmail"  type="email" placeholder="pepito@micorreo.com" icon={HiOutlineMail} required={true}/>
            <Input label= "Placa" id="userIdVehicle"  type="text" placeholder="AXY78G" icon={FaAddressCard} required={true}/>
            </ContainerInfoContact>
            <ContainerInfoParking>
            <TitleInfo>Informacion del estacionamiento</TitleInfo>
            <Input label= "Ubicación" id="userAddress"  type="text" placeholder=" mde cra 55 # 25-15 " icon={RiHomeHeartLine} required={true}/>
            </ContainerInfoParking>   
            </ContainerDataBooking>

            <ContainerDetailsBooking>
                <ContainerTime>
                <TitleInfo>Tiempo de parqueo</TitleInfo>
                <div>
                <Text>Hora de ingreso</Text>
                <input type="text" />
                </div>
                
                <div>
                <Text>Hora de salida</Text>
                <input type="text" />
                </div>

                <div>
                <Text>Cantidad de horas:</Text>
                <div>5</div>
                </div>
                </ContainerTime>

                <ContainerDeatails>
                <TitleInfo>Detalles de la reserva</TitleInfo>
                <Text>1 estacionamiento * 5 horas</Text>

                <div>
                <Text>Total a pagar:</Text>
                <Text>40.000</Text>
                </div>             
                <Button text={"RESERVA AHORA"}></Button>
                </ContainerDeatails>
            </ContainerDetailsBooking>


        </MainStyle>
        <Footer/>
        </>
    )
}

export default Booking