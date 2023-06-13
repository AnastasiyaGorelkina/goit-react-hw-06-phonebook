import { Item, List, Button } from "./ContactList.styled";
import { getContacts, getFilter } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contactsSlice";


export function ContactList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactDelete = (id) => {
    dispatch(deleteContact(id));
  };
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  // const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue.toLowerCase()));


  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button type="button" onClick={() => contactDelete(id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};


