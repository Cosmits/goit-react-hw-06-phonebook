import { List } from './ContactsList.styled';
import ContactsItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';


const ContactsList = () => {

  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const getFilterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  return (
    <List>
      {getFilterContacts().map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}       
        />
      ))}
    </List>
  );
};

export default ContactsList;