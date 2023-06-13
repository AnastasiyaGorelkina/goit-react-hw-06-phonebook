import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, actions) {
      return actions.payload;
    },
  },
});


export const { filterContacts } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;