import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts.array);
  const filter = useSelector(state => state.filter);

 
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();
  
  return (
    <div>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.text}>Contacts</h2>
      <Filter />
      <ContactsList
        contacts={visibleContacts}
      />
    </div>
  );
};
