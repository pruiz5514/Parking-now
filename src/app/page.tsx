"use client"

import "./globals.css";
import Footer from "app/components/Footer/Footer";
import Header from "app/components/Header/Header";
import Hero from "app/components/Hero/Hero";
import Benefits from "app/components/Benefits/Benefits";
import Baner from "app/components/General-baner/Baner";
import Button from "app/components/UI/Button/Button";

import Link from "next/link";
import { useState, FormEvent, useRef } from "react";
import { sendEmail } from "app/utils/sendEmail";
import Modal from "app/components/Modal/Modal";
import SignUp from "./sign-up/page";
import SignIn from "./sign-in/page";
import FormContactUs from "app/components/Contact-us/FormContactUs";
import styled from "styled-components";

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

  const PpalSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  gap: 10px;
  margin-block: 50px;
  justify-content: space-between;
`;

const Contenedor = styled.article`
  gap: 10px;
  display: flex;
  width: 100%;

`;

const Contenedor2 = styled(Contenedor)`
  height: 180px;
`;

const Info = styled.div`
  width: 70%;
  height: 100%;
`;

const Imagen = styled.div`
  width: 30%;
  height: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info2 = styled(Info)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img3 = styled.div`
  height: 48%;
  width: 100%;
`;

const Inf4 = styled.div`
  gap: 10px;
  display: flex;
  height: 48%;
  width: 100%;
`;

const ImgHalf = styled.div`
  width: 50%;
  height: 100%;
`;

const ImgHalfStyled = styled(StyledImg)`
  height: 100%;
`;
  return (
    <>
      <Header>
        <li> <Link href="/">Inicio</Link> </li>
        <li> <Link href="#benefits">Beneficios</Link> </li>
        <li> <Link href="#info">Información</Link></li>
        <li> <Link href="#contact">Contactanos</Link></li>
        <li> <Button text="Registrate" onClick={openSignUpModal} /> </li>
        <li> <Button text="Iniciar sesión" onClick={openSignInModal} /> </li>
      </Header>
      <Hero />
      <div>
      <Benefits id={"benefits"} />
      <Baner id={"info"} />
      <>
      <PpalSection>
        <Contenedor2>
          <Imagen>
            <StyledImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JiM2y1cwiiG0FMbDzrcNXazdsHGZ25hSNQ&s" alt="imagen de 1 conductora" />
          </Imagen>
          <Info2>
            <Img3>
              <StyledImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OpxGzDE2j8S-Dt-jd2Z-E5fZzEY_o4XhEw&s" alt="imagen de 1 conductora" />
            </Img3>
            <Inf4>
              <ImgHalf>
                <ImgHalfStyled src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PKeJJTjrgHyxS1Uc0NStrgYbwQNYH60kdOU_05FwR7iMya5psW5Cnft8oJ5fpspVuic&usqp=CAU" alt="imagen de 1 conductora" />
              </ImgHalf>
              <ImgHalf>
                <ImgHalfStyled src="https://img.freepik.com/vector-premium/vehiculos-motocicletas-conductores_18591-57747.jpg" alt="imagen de 1 conductora" />
              </ImgHalf>
            </Inf4>
          </Info2>
        </Contenedor2>
      </PpalSection>
    </>

      <FormContactUs id={"contact"} ref={formRef} onSubmit={handleSubmit} />
      </div>
      <Footer />

      {/* Modal para Registro  */}
      <Modal isOpen={isSignUpOpen} onClose={closeModals}>
        <SignUp />
      </Modal>

      {/* Modal para Inicio de Sesión */}
      <Modal isOpen={isSignInOpen} onClose={closeModals}>
        <SignIn />
      </Modal>
    </>
  );
}
