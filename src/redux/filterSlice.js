import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    filter: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        filter: (state, action) => {
            return {
                filter: action.payload,
            }
        },
    },
});

export const { filter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;