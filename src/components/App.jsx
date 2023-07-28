import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import Section from "./Section";
import ContactForm from './ContactForm';
import FilterInput from './FilterInput/FilterInput';
import ContactsList from './ContactsList/ContactsList';
import {
  // loadLocalStorage,
  saveLocalStorage
} from 'utils/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { delContacts, seFilter, setContacts } from 'redux/contactsReducer';

// const defContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]

export default function App() {

  // const [contacts, setContacts] = useState(loadLocalStorage() ?? defContacts);
  // const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const addContact = data => {
    const newContact = { ...data, id: nanoid(), };
    
      contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is duplicate contact`)
      : dispatch(setContacts(newContact))
    //   //setContacts(prevContacts => [...prevContacts, newContact,]);
  };

  const delContact = userId => {
    dispatch(delContacts(userId));
  };

  const handleChangeFilter = (event) => {
    // setFilter(event.currentTarget.value.toLowerCase());
    dispatch(seFilter(event.currentTarget.value.toLowerCase()))
  };

  const getFilterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

  useEffect(() => {
    saveLocalStorage(contacts);
  }, [contacts])

  //================================================================

  return (
    <>
      <Section title="Phonebook">
        <ContactForm addContact={addContact} />
      </Section>
      <Section title="Contacts">
        <FilterInput value={filter} onChangeFilter={handleChangeFilter} />
        <ContactsList contacts={getFilterContacts()} delContact={delContact} />
      </Section>
    </>)
}