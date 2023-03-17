import { useEffect } from 'react';
import { store } from '../redux/store';
import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { getFilter } from '../redux/filter/filter-selector';
import { getAllContacts } from '../redux/contacts/contact-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllContacts } from '../redux/contacts/contact-operations';

const App = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getAllContacts);
  console.log(filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filteredContacts = (contacts, filter) => {
    const normolizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  };
  console.log(filter);
  console.log(filteredContacts(contacts, filter));

  return (
    <div>
      <h1 className="h1">Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter />}​
      {contacts.length > 0 && (
        <ContactList contacts={filteredContacts(contacts, filter)} />
      )}
    </div>
  );
};

export default App;
