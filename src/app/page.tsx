"use client"

import { increment } from "app/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import Image from "next/image";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  return (
    <main>
      <h1>total: {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
    </main>
  );
}
