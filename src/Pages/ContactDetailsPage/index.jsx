import React from 'react';
import Form from '../../Components/Form';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactDetailsPage.module.scss';
import Modal from '../../Components/Modal';
import Icon from '../../Components/Icon';

const ContactDetailPage = () => {
  const [contacts, setContacts] = useState([]);
  const [contactId, setId] = useState('');
  const [showModal, setModal] = useState(false);
  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    setContacts(JSON.parse(storageContacts));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const handleAddContact = newContact => {
    if (contacts.some(({ surname }) => surname === newContact.surname)) {
      window.alert(`Contact ${newContact.surname} already used`);
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
        <Icon
          name="arrow-left"
          color="rgb(27, 27, 29)"
          size="15"
          className={styles.icon}
        />
        <span className={styles.span}> Home</span>
      </Link>
      <Form onSubmit={handleAddContact} onClick={showModalForDeleteContact} />
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
