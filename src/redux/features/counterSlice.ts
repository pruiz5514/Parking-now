import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        }
    }
})

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;