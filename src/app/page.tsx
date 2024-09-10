"use client"

import "./globals.css";
import Footer from "app/components/Footer/Footer";
import { increment } from "app/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import Header from "app/components/Header/Header";
import Hero from "app/components/Hero/Hero";
import Benefits from "app/components/Benefits/Benefits";
import Baner from "app/components/General-baner/Baner";
import Button from "app/components/UI/Button/Button";
import FormContactUs from "app/components/Contact-us/Form-contact-us";
import ReservedParking from "app/components/ReservedParking/ReservedParking";
import Link from "next/link";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <Header>
        <li> <Link href="/">Inicio</Link> </li>
        <li> <Link href="#benefits">Beneficios</Link> </li>
        <li> <Link href="#benefits">Información</Link></li>
        <li> <Link href="#benefits">Contactanos</Link></li>
        <li> <Link href="/sign-up"><Button text={"Registrate"} /></Link> </li>
        <li> <Button text={"Iniciar sesión"} /></li>
      </Header>
      <Hero/>
      <Benefits id={"benefits"}/>
      <Baner/>
      <FormContactUs/>
      <Footer/>
    </>
  );
}
