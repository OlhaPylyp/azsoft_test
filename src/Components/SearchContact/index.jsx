import styles from './SearchContact.module.scss';
import React from 'react';
import { Link, Outlet, useLocation, withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert';

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import ContactsList from './Pages/ContactList/ContactsPage';

const SearchContact = ({ filter, onChange }) => {
  //   const [contacts, setContacts] = useState([]);
  //   const [filter, setFilter] = useState('');

  //   useEffect(() => {
  //     const storageContacts = localStorage.getItem('contacts');
  //     setContacts(JSON.parse(storageContacts));
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   });

  //   const handleFilter = ({ target }) => setFilter(target.value);

  //   const contactsArr = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );

  return (
    <>
      <header className={styles.search_bar}>
        <form className={styles.searchForm}>
          <input
            className={styles.searchForm_input}
            type="text"
            value={filter}
            name="filter"
            onChange={onChange}
            autoComplete="off"
            placeholder="Search_contact"
          />
        </form>
      </header>
    </>
  );
};

export default SearchContact;
