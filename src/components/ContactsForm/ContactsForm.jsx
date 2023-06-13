import { Label, Form, Title, Input, Add } from './ContactsForm.styled';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';


export const ContactForm = () => {
    const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
  
      const form = e.target;
      const contact = {
          name: form.elements.name.value,
          number: form.elements.number.value,
          id: nanoid()
      }

      dispatch(addContact(contact));
      form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Add type="submit">Add contact</Add>
    </Form>
  );
};