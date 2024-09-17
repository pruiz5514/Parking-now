"use client"

import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import Collapside from "app/components/Collapside/Collapside";
import './slots.css';

const RegisterSlots: React.FC = () => {

    return (
        <>
            <Header>
                <li> <a href="../parkings">Inicio</a> </li>
                <li> <Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
            </Header>
            <section className="section-slot">
                <div className="container-slot">
                    <h1 className="container-slot-title">Agregar Celdas Carro</h1>
                    <Collapside text={"Cubierto"} />
                    <Collapside text={"Descubierto"} />
                </div>

                <div className="container-slot">
                    <h1 className="container-slot-title">Agregar Celdas Moto</h1>
                    <Collapside text={"Cubierto"} />
                    <Collapside text={"Descubierto"} />
                </div>
            </section>
        </>
    )
}

export default RegisterSlots;