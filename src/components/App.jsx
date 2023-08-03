import Section from "./Section";
import ContactForm from './ContactForm';
import FilterInput from './FilterInput/FilterInput';
import ContactsList from './ContactsList/ContactsList';


export default function App() {
  return (
    <>
      <Section title="PhoneBook">
        <ContactForm/>
      </Section>
      <Section title="Contacts">
        <FilterInput />
        <ContactsList />
      </Section>
    </>)
}