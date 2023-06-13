import { Item, List, Button } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const deletContact = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visible = getVisibleContacts();

  return (
    <List>
      {visible.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button type="button" onClick={() => deletContact(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};