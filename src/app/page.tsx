"use client"

import "./globals.css";
import Footer from "app/components/Footer/Footer";
import { increment } from "app/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  return (
    <main>
      <Header>
        <li> <a href="">Inicio</a> </li>
        <li> <a href="">Beneficios</a> </li>
        <li> <a href="">Información</a> </li>
        <li> <a href="">Contactanos</a> </li>
        <li> <Button text={"Registrate"} /> </li>
        <li> <Button text={"Iniciar sesión"} /></li>
      </Header>
        <h1>total: {count}</h1>
        <button onClick={()=> dispatch(increment())}>Increment</button>
      <Footer></Footer>
    </main>
  );
}
