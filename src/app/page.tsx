"use client"

import Footer from "app/components/Footer/Footer";
import { increment } from "app/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import Header from "app/components/Header/Header";
import Hero from "app/components/Hero/Hero";
import Benefits from "app/components/Benefits/Benefits";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  return (
    <main>
      <Header/>
      {/* <h1>total: {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button> */}
      <Hero/>
      <Benefits/>
      <section>
         <h2>Encuentra tu espacio de estacionamiento sin complocaciones, facil y rápido</h2>
      </section>
      <Footer/>
    </main>
  );
}
