import { React } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  withRouter,
  Prompt,
} from 'react-router-dom';
import { useAlert } from 'react-alert';
import styles from './ContactPage.module.scss';
import Modal from '../../Components/Modal';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import ContactsList from './Pages/ContactList/ContactsPage';
import ContactList from '../../Components/ContactList/ContactList';
import ContactForm from '../../Components/ContactForm/ContactForm';
import SearchContact from '../../Components/SearchContact';
import DeleteBtn from '../../Components/DeleteBtn';

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

  const handleAddContact = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      window.alert(`Contact is already in contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
  };

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
      <SearchContact filter={filter} onChange={handleFilter} />
      <ContactList contacts={contactsArr} onClick={showModalForDeleteContact} />
      {showModal && (
        <Modal onClick={() => toogleModal} close={toogleModal}>
          <button onClick={handleDeleteItem}>Yes</button>
          <button onClick={toogleModal}>No</button>
        </Modal>
      )}
      <button onClick={() => toogleModal()}>Modal</button>

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
