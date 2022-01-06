import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactDetailsPage.module.scss';
import ContactList from '../../Components/ContactList/ContactList';
import ContactDetailItem from '../../Components/ContactDetailsItem';
import Modal from '../../Components/Modal';

const ContactDetailPage = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [contactId, setId] = useState('');
  const [showModal, setModal] = useState(false);
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

  const showModalForDeleteContact = ({ target }) => {
    console.log('target=', target);
    console.log('targetId=', target.id);
    setId(target.id);

    toogleModal();
  };

  const handleDeleteItem = () => {
    const newContactList = contacts.filter(contact => contact.id !== contactId);
    setContacts([...newContactList]);
    toogleModal();
  };
  const toogleModal = () => setModal(!showModal);
  return (
    <>
      {' '}
      <Link to="/" className={styles.link}>
        {' '}
        go Back
      </Link>
      {/* <ContactDetailItem contacts={contactsArr} /> */}
      <ContactForm onSubmit={handleAddContact} />
      {/* <ContactList contacts={contactsArr} onClick={showModalForDeleteContact} /> */}
      <ContactDetailItem
        contacts={contactsArr}
        onClick={showModalForDeleteContact}
      />
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
    </>
  );
};
export default ContactDetailPage;
