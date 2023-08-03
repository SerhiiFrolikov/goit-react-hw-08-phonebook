import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getContactsNames } from 'redux/contacts/selectors';
import { getFilteredNames } from 'redux/filter/filterSlice';

import {
  List,
  ListItem,
  Name,
  PhoneNumber,
  DeleteBtn,
} from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsNames);
  const queryFilter = useSelector(getFilteredNames);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(queryFilter.toLowerCase())
  );

  const handleDeleteContact = async id => {
    await dispatch(deleteContact(id)).unwrap();
  };

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            <Name>
              {name}: <PhoneNumber>{number}</PhoneNumber>
            </Name>
            <DeleteBtn id={id} onClick={() => handleDeleteContact(id)}>
              Delete
            </DeleteBtn>
          </ListItem>
        );
      })}
    </List>
  );
};
