import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import filterAsideReducer from "./features/filterAsideSlice";

export const store = configureStore({
    reducer: {
        counterReducer,
        filterAsideReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch