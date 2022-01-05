import React from 'react';
import { Link, Outlet, useLocation, withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert';
import styles from './ContactPage.module.scss';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import ContactsList from './Pages/ContactList/ContactsPage';
import ContactList from '../../Components/ContactList/ContactList';
import ContactForm from '../../Components/ContactForm/ContactForm';
import SearchContact from '../../Components/SearchContact';

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    setContacts(JSON.parse(storageContacts));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const handleFilter = ({ target }) => setFilter(target.value);

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
      <SearchContact filter={filter} onChange={handleFilter} />
      <ContactList contacts={contactsArr} onClick={handleDeleteItem} />
      <NavLink
        to="ContactDetailPage"
        // className={styles.NavLink}
        // activeClassName={styles.NavLinkActive}
      >
        <div> Добавить</div>
      </NavLink>
    </>
  );
};

export default ContactPage;
