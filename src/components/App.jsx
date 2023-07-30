import { nanoid } from 'nanoid';

import Section from "./Section";
import ContactForm from './ContactForm';
import FilterInput from './FilterInput/FilterInput';
import ContactsList from './ContactsList/ContactsList';

import { useDispatch, useSelector } from 'react-redux';
import { setContactSlice, delContactSlice } from 'redux/contactsSlice';
import { setFilterSlice } from 'redux/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';

export default function App() {

  const dispatch = useDispatch();

  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const addContact = data => {
    const newContact = { ...data, id: nanoid(), };

    contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is duplicate contact`)
      : dispatch(setContactSlice(newContact))
  };

  const delContact = userId => {
    dispatch(delContactSlice(userId));
  };

  const handleChangeFilter = (event) => {
    dispatch(setFilterSlice(event.currentTarget.value.toLowerCase()))
  };

  const getFilterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  };

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