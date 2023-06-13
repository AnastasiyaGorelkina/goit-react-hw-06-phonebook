import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
         addContact(state, actions) {
      state.contacts = [...state.contacts, actions.payload];
    },

        deleteContact(state, actions) {
      state.contacts = state.contacts.filter(el => el.id !== actions.payload);
      console.log(actions.payload);
      console.log(state.contacts);
    },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;