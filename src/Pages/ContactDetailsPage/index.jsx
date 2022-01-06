import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactDetailsPage.module.scss';
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
      <Link to="/" className={styles.link}>
        {' '}
        go Back
      </Link>
      {/* <ContactDetailItem contacts={contactsArr} /> */}
      <ContactForm onSubmit={handleAddContact} />
      <ContactList contacts={contactsArr} onClick={handleDeleteItem} />
    </>
  );
};
export default ContactDetailPage;
