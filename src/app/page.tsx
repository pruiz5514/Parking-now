"use client"

import "./globals.css";
import Header from "app/components/Header/Header";
import Hero from "app/components/Hero/Hero";
import Benefits from "app/components/Benefits/Benefits";
import Baner from "app/components/General-baner/Baner";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import { useState, FormEvent, useRef } from "react";
import { sendEmail } from "app/utils/sendEmail";
import Modal from "app/components/Modal/Modal";

import FormContactUs from "app/components/Contact-us/FormContactUs";
import SignUp from "app/components/SignUp/SignUp";
import SignIn from "app/components/SignIn/SignIn";
import Spinner from "app/components/Spinner/Spinner";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      sendEmail(formRef, 'service_z3c311w', 'template_lid1dqo', 'T21kkOiMTWkTwlvRn', "Mensaje enviado exitosamente");
      formRef.current.reset();
    }
  };

  const openSignUpModal = () => setIsSignUpOpen(true);
  const openSignInModal = () => setIsSignInOpen(true);
  const closeModals = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(false);
  };

  return (
    <>
      <Header>
        <li> <Link href="/">Inicio</Link> </li>
        <li> <Link href="#benefits">Beneficios</Link> </li>
        <li> <Link href="#contact">Contáctanos</Link></li>
        <li> <Button text="Registrate" onClick={openSignUpModal} /> </li>
        <li> <Button text="Iniciar sesión" onClick={openSignInModal} /> </li>
      </Header>
      <Hero />
      <Benefits id={"benefits"} />
      <Baner id={"info"} />
      <FormContactUs id={"contact"} ref={formRef} onSubmit={handleSubmit} />
      <Modal isOpen={isSignUpOpen} onClose={closeModals}>
        <SignUp onClose={closeModals} />
      </Modal>

      <Modal isOpen={isSignInOpen} onClose={closeModals}>
        <SignIn />
      </Modal>
    </>
  );
}
