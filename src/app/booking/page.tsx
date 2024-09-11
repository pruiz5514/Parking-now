"use client"
import Header from "app/components/Header/Header"
import Footer from "app/components/Footer/Footer"
import Link from "next/link"
import Button from "app/components/UI/Button/Button"
import { MainStyle, Title, ContainerDataBooking, ContainerDetailsBooking, ContainerInfoContact, ContainerInfoParking, TitleInfo, ContainerTime, ContainerDeatails, Text, ContainerAmountTime, Containerhours, ContainerAmountTotal, ContainerButton } from "./booking-style"
import Input from "app/components/UI/Input/Input"
import { FaAddressCard, FaEnvelope, FaMap, FaPhone, FaUser } from "react-icons/fa"
import InputDateTime from "app/components/UI/InputDateTime/InputDateTime"

const Booking = () => {
    return (
        <>
            <Header>
                <li><Link href="/">Inicio</Link></li>
                <li> <Link href="/sign-in"><Button text={"Cerrar sesión"} /></Link></li>
            </Header>
            <MainStyle>
                <ContainerDataBooking>
                    <Title>Tu Reserva</Title>
                    <ContainerInfoContact >
                        <TitleInfo>Informacion del contacto</TitleInfo>
                        <Input label="Nombre completo" id="userName" type="text" placeholder="Ingresa tu nombre" icon={FaUser} required={true} />
                        <Input label="Número de contacto" id="userPhone" type="number" placeholder="123 456 14 25" icon={FaPhone} required={true} />
                        <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="pepito@micorreo.com" icon={FaEnvelope} required={true} />
                        <Input label="Placa" id="userIdVehicle" type="text" placeholder="AXY78G" icon={FaAddressCard} required={true} />
                    </ContainerInfoContact>

                    <ContainerInfoParking>
                        <TitleInfo>Informacion del estacionamiento</TitleInfo>
                        <Input label="Ubicación" id="userAddress" type="text" placeholder=" mde cra 55 # 25-15 " icon={FaMap} required={true} />
                    </ContainerInfoParking>
                </ContainerDataBooking>

                <ContainerDetailsBooking>
                    <ContainerTime>
                        <TitleInfo>Tiempo de parqueo</TitleInfo>
                        <div>
                            <Text>Hora de ingreso</Text>
                            <InputDateTime label="" id="userHourIn" type="datetime-local" required={true}/>
                        </div>

                        <div>
                            <Text>Hora de salida</Text>
                            <InputDateTime label="" id="userHourOut"type="datetime-local"  required={true} />
                        </div>

                        <ContainerAmountTime>
                            <Text>Cantidad de horas:</Text>
                            <Containerhours>5</Containerhours>
                        </ContainerAmountTime>
                    </ContainerTime>

                    <ContainerDeatails>
                        <TitleInfo>Detalles de la reserva</TitleInfo>
                        <Text>1 estacionamiento * 5 horas</Text>
                        <ContainerAmountTotal>
                            <Text>Total a pagar:</Text>
                            <Text>40.000</Text>
                        </ContainerAmountTotal>
                        <ContainerButton>
                            <Link href=""><Button text={"Reservar ahora"}></Button></Link>
                        </ContainerButton>
                    </ContainerDeatails>
                </ContainerDetailsBooking>


            </MainStyle>
            <Footer />
        </>
    )
}

export default Booking