import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import filterAsideReducer from "./features/filterAsideSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
    reducer: {
        counterReducer,
        filterAsideReducer,
        userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch