import PropTypes from 'prop-types';

import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactItem.styled';
import { delContactSlice } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactsItem = ({ id, name, number }) => {

  const dispatch = useDispatch();

  const delContact = userId => {
    dispatch(delContactSlice(userId));
  };

  return (
    <ContactItem key={id}>
      <ContactName>
        {name}:<ContactNumber>{number}</ContactNumber>
      </ContactName>
      <Button onClick={() => delContact(id)}>Delete</Button>
    </ContactItem>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem