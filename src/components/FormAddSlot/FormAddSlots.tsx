import React, { useState } from "react";
import Button from "../UI/Button/Button"
import Form from "../General-form/Form"
import Input from "../UI/Input/Input";
import { FaThLarge } from "react-icons/fa";
import { FormContainerContactUs } from "../Contact-us/Contact-us-style";

const FormAddSlots: React.FC = () => {
    const [numberofSlots, setnumberSlots] = useState(0);

    const handleNumberChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setnumberSlots(value);
        } else {
            setnumberSlots(0);
        }
    };
    return (
        <Form
            title="Agregar Celdas"
            footerContent={
                <>
                    <Button text={"GUARDAR"} />
                </>
            }
        >
            <Input label="¿Cuántas Celdas deseas agregar?" id="" type="number" icon={FaThLarge} required={true} onChange={handleNumberChange} />
            {
                Array.from({ length: numberofSlots }, (_, index) => (
                    <Input key={index} label={`Celda ${index + 1}`} id={`slot-${index + 1}`} type="text" placeholder={`Ingrese el nombre de la celda ${index + 1}`} icon={FaThLarge} required={true} />
                ))}
        </Form>
    )
}

export default FormAddSlots;