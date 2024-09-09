import { createSlice } from "@reduxjs/toolkit";

export const filterAsideSlice = createSlice({
    name: "filterAside",
    initialState: {
        isOpen: false
    },
    reducers: {
        openAside: (state) => {
            state.isOpen = true;
        },
        closeAside: (state) => {
            state.isOpen = false;
        }
    }
})

export const { openAside, closeAside } = filterAsideSlice.actions;

export default filterAsideSlice.reducer;