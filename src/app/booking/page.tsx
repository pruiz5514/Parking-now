"use client"
import Header from "app/components/Header/Header"
import Footer from "app/components/Footer/Footer"
import Link from "next/link"
import Button from "app/components/UI/Button/Button"
import { MainStyle, Title, ContainerDataBooking, ContainerDetailsBooking, ContainerInfoContact, ContainerInfoParking, TitleInfo, ContainerTime, ContainerDeatails, Text, ContainerAmountTotal, ContainerButton } from "./booking-style"
import Input from "app/components/UI/Input/Input"
import { FaAddressCard, FaEnvelope, FaMap, FaPhone, FaUser } from "react-icons/fa"
import { InputContainer, Label } from "app/components/UI/Input/Input-style"
import { SelectAddress } from "app/components/UI/Select/Select-style"

const Booking = () => {
    return (
        <>
            <Header>
                <li><Link href="./parkings">Inicio</Link></li>
                <li> <Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
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
                        <TitleInfo>Cantidad de horas</TitleInfo>
                        
                        <InputContainer>
                        <Label htmlFor="select-hour-parking">Seleccione la cantidad de horas que desea reservar</Label>
                        <SelectAddress name={"location"} id={"select-hour-parking"}>
                            <option value="" selected disabled></option>
                            <option value="1">1 </option>
                            <option value="2">2 </option>
                            <option value="3">3 </option>
                            <option value="4">4 </option>
                            <option value="5">5 </option>
                            <option value="6">6 </option>
                            <option value="7">7 </option>
                            <option value="8">8 </option>
                            <option value="9">9 </option>
                            <option value="10">10 </option>
                            <option value="11">11 </option>
                            <option value="12">12 </option>
                            <option value="13">13 </option>
                            <option value="14">14 </option>
                            <option value="15">15 </option>
                            <option value="16">16 </option>
                            <option value="17">17 </option>
                            <option value="18">18 </option>
                            <option value="19">19 </option>
                            <option value="20">20 </option>
                            <option value="21">21 </option>
                            <option value="22">22 </option>
                            <option value="23">23 </option>
                            <option value="24">24 </option>
                        </SelectAddress>
                    </InputContainer>

                    </ContainerTime>

                    <ContainerDeatails>
                        <TitleInfo>Detalles de la reserva</TitleInfo>
                        <Text>1 estacionamiento * 5 horas</Text>
                        <ContainerAmountTotal>
                            <Text>Total a pagar:</Text>
                            <Text>40.000</Text>
                        </ContainerAmountTotal>
                        <ContainerButton>
                            <Link href="/" style={{ width: '100%' }}><Button text={"Reservar ahora"}></Button></Link>
                        </ContainerButton>
                    </ContainerDeatails>
                </ContainerDetailsBooking>


            </MainStyle>
            <Footer />
        </>
    )
}

export default Booking