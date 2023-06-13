import React from 'react';
import { ContactForm } from "components/ContactsForm/ContactsForm";
import  { ContactList }  from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Section } from "./App.styled";

export const App = () => {
  return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        <h2>Contacts</h2>
        <ContactList />
      </Section>
    );
};