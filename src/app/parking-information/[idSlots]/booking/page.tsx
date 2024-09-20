"use client"
import Header from "app/components/Header/Header"
import Link from "next/link"
import Button from "app/components/UI/Button/Button"
import { MainStyle, Title, ContainerInfoContact, Span, ContainerInfoParking, TitleInfo, ContainerDeatails} from "./booking-style"
import Input from "app/components/UI/Input/Input"
import { FaAddressCard, FaEnvelope, FaMap, FaPhone, FaUser } from "react-icons/fa"


const Booking = () => (
    <>
        <Header>
            <li><Link href="/parkings">Inicio</Link></li>
            <li><Link href="/register-parking">Publicar parqueadero</Link></li>
            <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
            <li> <Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
        </Header>
        <MainStyle>
            <div>
                <Title>Tu Reserva</Title>
                <ContainerInfoContact>
                    <TitleInfo>Información del contacto</TitleInfo>
                    <Input label="Nombre completo" id="userName" type="text" placeholder="Ingresa tu nombre" icon={FaUser} required={true} />
                    <Input label="Teléfono" id="userPhone" type="number" placeholder="123 456 14 25" icon={FaPhone} required={true} />
                    <Input label="Correo electrónico" id="userAddressEmail" type="email" placeholder="pepito@micorreo.com" icon={FaEnvelope} required={true} />
                    <Input label="Placa" name= "vehicle_plate" id="userIdVehicle" type="text" placeholder="AXY78G" icon={FaAddressCard} required={true} />
                </ContainerInfoContact>

                <ContainerInfoParking>
                    <TitleInfo>Información del estacionamiento</TitleInfo>
                    <Input label="Ubicación" id="userAddress" type="text" placeholder=" mde cra 55 # 25-15 " icon={FaMap} required={true} />
                    <Link href="/reserved-parking" style={{ width: '100%' }}><Button text={"Reservar ahora"}></Button></Link>
                </ContainerInfoParking>
            </div>

            <ContainerDeatails>
                <TitleInfo>Recuerda! Después de hacer la reserva, presiona el botón <Span>Iniciar</Span> para que comience el cobro del parqueadero. </TitleInfo>
            </ContainerDeatails>

        </MainStyle>
    </>
)

export default Booking