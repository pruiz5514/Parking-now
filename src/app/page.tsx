"use client"

import Footer from "app/components/Footer/Footer";
import { increment } from "app/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import Header from "app/components/Header/Header";
import TextArea from "app/components/UI/TextArea/TextArea";
import Input from "app/components/UI/Input/Input";
import { MdOutlinePersonOutline } from "react-icons/md";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  return (
    <main>
      <Header/>
      <h1>total: {count}</h1>
      <Input
        label="Mensaje"
        type="email"
        placeholder="Ingresa tu nombre"
        id="nombre"
        icon={MdOutlinePersonOutline}
      />
      <Input
        label="Nombre Completo"
        type="email"
        placeholder="Ingresa tu nombre"
        id="nombre"
        icon={MdOutlinePersonOutline}
      />
      <TextArea id="textareamsn" label="Mensaje"></TextArea>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <Footer></Footer>
    </main>
  );
}
