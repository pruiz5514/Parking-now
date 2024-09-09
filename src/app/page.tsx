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

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <Header>
        <li> <a href="">Inicio</a> </li>
        <li> <a href="">Beneficios</a> </li>
        <li> <a href="">Información</a> </li>
        <li> <a href="">Contactanos</a> </li>
        <li> <Button text={"Registrate"} /> </li>
        <li> <Button text={"Iniciar sesión"} /></li>
      </Header>
      <Hero/>
      <Benefits/>
      <Baner/>
      <FormContactUs/>
      <Footer/>
    </>
  );
}
