import { React } from 'react';
// import {
//   Link,
//   Outlet,
//   useLocation,
//   withRouter,
//   Prompt,
// } from 'react-router-dom';

import styles from './ContactPage.module.scss';
import Modal from '../../Components/Modal';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import ContactsList from './Pages/ContactList/ContactsPage';
import ContactList from '../../Components/ContactList/ContactList';
import SearchContact from '../../Components/SearchContact';

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [showModal, setModal] = useState(false);
  const [deleteIdContact, setDelete] = useState('');

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

  // const handleAddContact = newContact => {
  //   if (contacts.some(contact => contact.name === newContact.name)) {
  //     window.alert(`Contact is already in contacts.`);
  //     return;
  //   }
  //   setContacts(prevState => [...prevState, newContact]);
  // };

  const showModalForDeleteContact = ({ target }) => {
    console.log('target=', target);
    console.log('targetId=', target.id);
    setDelete(target.id);
    console.log('deleteIdContact=', deleteIdContact);

    toogleModal();
  };

  const toogleModal = () => setModal(!showModal);

  const handleDeleteItem = () => {
    console.log('handleDeleteItemdeleteIdContact', deleteIdContact);
    const newContactList = contacts.filter(
      contact => contact.id !== deleteIdContact,
    );
    setContacts([...newContactList]);
  };
  return (
    <>
      {/* <SearchContact filter={filter} onChange={handleFilter} /> */}
      <h2 className={styles.title}>Contact List</h2>
      <ContactList contacts={contactsArr} onClick={showModalForDeleteContact} />
      {showModal && (
        <Modal onClick={() => toogleModal} close={toogleModal}>
          <p className={styles.text}>
            Are you sure you want to delete the contact
          </p>
          <button className={styles.btn} onClick={handleDeleteItem}>
            Yes
          </button>
          <button className={styles.btn} onClick={toogleModal}>
            No
          </button>
        </Modal>
      )}

      <div className={styles.btn_container}>
        <NavLink
          to="ContactDetailPage"
          className={styles.NavLink}
          // activeClassName={styles.NavLinkActive}
        >
          {' '}
          +
        </NavLink>
      </div>
    </>
  );
};

export default ContactPage;
