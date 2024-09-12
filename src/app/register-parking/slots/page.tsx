"use client"

import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import Form from "app/components/General-form/Form";
import { FaThLarge } from "react-icons/fa";
import Input from "app/components/UI/Input/Input";
import { useState } from "react";
import { MainRegParking } from "../register-parking-style";

const RegisterSlots: React.FC = () => {
    const [numberofSlots, setnumberSlots] = useState(0);

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setnumberSlots(value);
        } else {
            setnumberSlots(0);
        }
    };
    return (
        <>
            <Header>
                <li> <a href="./parkings">Inicio</a> </li>
                <li> <Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
            </Header>
            <MainRegParking>
                <Form
                    title="Agregar Celdas"
                    footerContent={
                        <>
                            <Button text={"Guardar"} />
                        </>
                    }
                >
                    <Input label="¿Cuántas Celdas deseas agregar?" id="" type="number" icon={FaThLarge} required={true} onChange={handleNumberChange} />
                    {
                        Array.from({ length: numberofSlots }, (_, index) => (
                            <Input key={index} label={`Celda ${index + 1}`} id={`slot-${index + 1}`} type="text" placeholder={`Ingrese el nombre de la celda ${index + 1}`} icon={FaThLarge} required={true} />
                        ))}
                </Form>
            </MainRegParking>

        </>

    )
}

export default RegisterSlots;