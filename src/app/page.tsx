"use client"

import "./globals.css";
import Footer from "app/components/Footer/Footer";
import Header from "app/components/Header/Header";
import Hero from "app/components/Hero/Hero";
import Benefits from "app/components/Benefits/Benefits";
import Baner from "app/components/General-baner/Baner";
import Button from "app/components/UI/Button/Button";
import FormContactUs from "app/components/Contact-us/Form-contact-us";
import Link from "next/link";
import FormAddSlots from "app/components/FormAddSlot/FormAddSlots";
import { useRef } from "react";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <>
      <Header>
        <li> <Link href="/">Inicio</Link> </li>
        <li> <Link href="#benefits">Beneficios</Link> </li>
        <li> <Link href="#info">Información</Link></li>
        <li> <Link href="#contact">Contactanos</Link></li>
        <li> <Link href="/sign-up"><Button text={"Registrate"} /></Link> </li>
        <li> <Link href="/sign-in"><Button text={"Iniciar sesión"} /></Link></li>
      </Header>
      <Hero/>
      <Benefits id={"benefits"}/>
      <Baner id={"info"} />
      <FormContactUs id={"contact"} ref={formRef}/>
      <Footer/>
    </>
  );
}
