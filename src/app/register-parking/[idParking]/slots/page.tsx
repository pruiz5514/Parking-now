"use client"

import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import Collapside from "app/components/Collapside/Collapside";
import './slots.css';

const RegisterSlots: React.FC<{ params: { idParking: string } }> = ({ params }) => {
    const { idParking } = params
    console.log(idParking);
    
    return (
        <>
            <section className="section-slot">
                <div className="container-slot">
                    <h1 className="container-slot-title">Agregar Celdas Carro</h1>
                    <Collapside text={"Cubierto"} type="cubierto-carro" idParking={idParking} />
                    <Collapside text={"Descubierto"} type="descubierto-carro" idParking={idParking} />
                </div>

                <div className="container-slot">
                    <h1 className="container-slot-title">Agregar Celdas Moto</h1>
                    <Collapside text={"Cubierto"} type="cubierto-moto" idParking={idParking} />
                    <Collapside text={"Descubierto"} type="descubierto-moto" idParking={idParking} />
                </div>
            </section>
        </>
    )
}

export default RegisterSlots;