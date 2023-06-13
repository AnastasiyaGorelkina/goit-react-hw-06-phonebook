import { Input, Label } from "components/ContactsForm/ContactsForm.styled";
import { useDispatch } from "react-redux";
import { filter } from "redux/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    const search = (e) => {
        dispatch(filter(e.target.value));
    };

  return (
    <Label>
      <h3>Find contacts by name</h3>
      <Input onChange={search} name="filter" />
    </Label>
  );
};