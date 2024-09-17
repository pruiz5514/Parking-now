'use client'

import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Form from "../General-form/Form";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { FaDollarSign, FaThLarge } from "react-icons/fa";
import { CollapsideParkingTitle } from "./Collapside-style";
import { ISlots } from "app/types/ISlots";


const Collapside: React.FC<ISlots> = ({text}) => {
    const [numberofSlots, setnumberSlots] = useState(0);

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setnumberSlots(value);
        } else {
            setnumberSlots(0);
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    let slotButtonIcon;
    if (!isOpen) {
        slotButtonIcon = <GoChevronDown />
    } else {
        slotButtonIcon = <GoChevronUp />
    }

    return (
        <section>
            <CollapsideParkingTitle  onClick={() => setIsOpen(!isOpen)}>
                <h2>{text}</h2>  {slotButtonIcon}
            </CollapsideParkingTitle>

            <article style={{ display: isOpen ? 'flex' : 'none' }}>
                <Form
                    footerContent={
                        <>
                            <Button text={"Guardar"} />
                        </>
                    }
                >
                    <Input label="Precio por hora" id="price-hour" type="number" icon={FaDollarSign} required={true} />
                    <Input label="¿Cuántas Celdas deseas agregar?" id="" type="number" icon={FaThLarge} required={true} onChange={handleNumberChange} />
                    {
                        Array.from({ length: numberofSlots }, (_, index) => (
                            <>
                                <Input key={index} label={`Celda ${index + 1}`} id={`slot-${index + 1}`} type="text" placeholder={`Ingrese el nombre de la celda ${index + 1}`} icon={FaThLarge} required={true} />
                            </>
                        ))}
                </Form>
            </article>

        </section>
    )
}

export default Collapside