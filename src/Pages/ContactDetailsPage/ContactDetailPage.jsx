import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';
import { useState, useEffect } from 'react';
// import ContactDetailItem from '../../Components/ContctdetailsItem';
import ContactList from '../../Components/ContactList/ContactList';
const ContactDetailPage = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    setContacts(JSON.parse(storageContacts));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  // const handleFilter = ({ target }) => setFilter(target.value);

  const contactsArr = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleAddContact = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      window.alert(`Contact is already in contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleDeleteItem = ({ target }) => {
    const newContactList = contacts.filter(contact => target.id !== contact.id);
    setContacts([...newContactList]);
  };
  return (
    <>
      {' '}
      <div>ghbdtn</div>
      {/* <ContactDetailItem contacts={contactsArr} /> */}
      <ContactList contacts={contactsArr} onClick={handleDeleteItem} />
      <ContactForm onSubmit={handleAddContact} />
    </>
  );
};
export default ContactDetailPage;
