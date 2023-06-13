import React from 'react';
import { Input, Label } from "components/ContactsForm/ContactsForm.styled";
import { useDispatch } from "react-redux";
import { filterContacts } from "redux/filterSlice"

export const Filter = () => {
  const dispatch = useDispatch();
  
    const search = e => {
        dispatch(filterContacts(e.target.value));
    };

  return (
    <Label>
      <h3>Find contacts by name</h3>
      <Input onChange={search} name="filter" />
    </Label>
  );
};