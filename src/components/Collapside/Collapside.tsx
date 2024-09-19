'use client'

import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Form from "../General-form/Form";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { FaDollarSign, FaThLarge } from "react-icons/fa";
import { CollapsideParkingTitle } from "./Collapside-style";
import { ICollapside } from "app/types/ICollapside";
import Cookies from 'js-cookie';
import { createSlots } from "app/services/slots";
import { ISlots } from "app/types/ISlots";


const Collapside: React.FC<ICollapside> = ({ text, type, idParking }) => {
    const [numberofSlots, setnumberSlots] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setnumberSlots(value);
        } else {
            setnumberSlots(0);
        }
    };

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //  toma los datos de un formulario (disparado por un evento), los convierte en un objeto clave-valor, donde las claves son los nombres de los campos y los valores son sus respectivos valores.
        const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement).entries())
        console.log('>>form', formData)

        const slotsToBeCreated = Object.keys(formData).filter(slot => slot.startsWith('slot-'))

        const cookieToken = Cookies.get("token");

        if (type === 'cubierto-carro') {
            const newSlots = slotsToBeCreated.map(slot => ({
                is_covered: true,
                vehicle_type_id: 1,
                hour_price: formData.hour_price,
                name: formData[slot],
                parking_id: idParking
            }))
            try {
                console.log("hola");
                if (cookieToken) {
                    console.log("hola2");
                    const data = await createSlots(newSlots as unknown as ISlots, cookieToken)
                    if (data) {
                        (event.target as HTMLFormElement).reset()
                    }
                }
            } catch (error) {
                console.error(error)
            }
            console.log('>> newSlots', newSlots)
        }

        if (type === 'descubierto-carro') {
            const newSlots2 = slotsToBeCreated.map(slot => {
                return {
                    is_covered: false,
                    vehicle_type_id: 1,
                    hour_price: formData.hour_price,
                    name: formData[slot],
                    parking_id: idParking
                }
            })

            // llamado al backend
            console.log('>> newSlots2', newSlots2)

        }

        if (type === 'cubierto-moto') {

            const newSlots = slotsToBeCreated.map(slot => {
                return {
                    is_covered: true,
                    vehicle_type_id: 2,
                    hour_price: formData.hour_price,
                    name: formData[slot],
                    // owner_id: '75127070-8380-4721-b2f5-677162a38a43',
                    parking_id: idParking
                }
            })

            // llamado al backend
            console.log('>> newSlots3', newSlots)
        }

        if (type === 'descubierto-moto') {
            const newSlots = slotsToBeCreated.map(slot => {
                return {
                    is_covered: false,
                    vehicle_type_id: 2,
                    hour_price: formData.hour_price,
                    name: formData[slot],
                    parking_id: idParking
                }
            })
            // llamado al backend
            console.log('>> newSlots4', newSlots)
        }
    }

    let slotButtonIcon;
    if (!isOpen) {
        slotButtonIcon = <GoChevronDown />
    } else {
        slotButtonIcon = <GoChevronUp />
    }

    return (
        <section>
            <CollapsideParkingTitle onClick={() => setIsOpen(!isOpen)}>
                <h2>{text}</h2>  {slotButtonIcon}
            </CollapsideParkingTitle>

            <article style={{ display: isOpen ? 'flex' : 'none' }}>
                <Form
                    onSubmit={onFormSubmit}
                    footerContent={
                        <>
                            <Button text={"Guardar"} />
                        </>
                    }
                >
                    <Input name="hour_price" label="Precio por hora" id="price-hour" type="text" icon={FaDollarSign} required={true} />
                    <Input label="¿Cuántas Celdas deseas agregar?" id="" type="number" icon={FaThLarge} required={true} onChange={handleNumberChange} />
                    {
                        Array.from({ length: numberofSlots }, (_, index) => (
                            <>
                                <Input name={`slot-${index}`} key={index} label={`Celda ${index + 1}`} id={`slot-${index + 1}`} type="text" placeholder={`Ingrese el nombre de la celda ${index + 1}`} icon={FaThLarge} required={true} />
                            </>
                        ))}
                </Form>
            </article>

        </section>
    )
}

export default Collapside