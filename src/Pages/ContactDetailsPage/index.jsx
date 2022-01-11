import React from 'react';
import Form from '../../Components/Form';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './ContactDetailsPage.module.scss';
import Modal from '../../Components/Modal';
import Icon from '../../Components/Icon';

const ContactDetailPage = () => {
  const [contacts, setContacts] = useState([]);
  const [contactId, setId] = useState('');
  const [addedContactId, setAdd] = useState('');
  const [showModal, setModal] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    if (storageContacts) {
      setContacts(JSON.parse(storageContacts));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });
  // useEffect(() => {
  //   navigate({
  //     pathname: `/ContactDetailPage/${addedContactId}`,
  //     // state: {
  //     //   query,
  //     // },
  //   });
  //   console.log('navigate', navigate);
  // });
  const handleAddContact = newContact => {
    console.log('newContact', newContact);

    if (contacts.some(({ surname }) => surname === newContact.surname)) {
      window.alert(`Contact ${newContact.surname} already used`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
    setAdd(newContact.id);
  };

  const showModalForDeleteContact = ({ target }) => {
    setId(target.id);

    toogleModal();
  };

  const handleDeleteItem = () => {
    const newContactList = contacts.filter(contact => contact.id !== contactId);
    setContacts([...newContactList]);
    toogleModal();
  };

  const toogleModal = () => setModal(!showModal);

  console.log('addedContactId', addedContactId);

  return (
    <>
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
      <Form
        onSubmit={handleAddContact}
        idAdded={addedContactId}
        onClick={showModalForDeleteContact}
      />

      {showModal && (
        <Modal onClick={() => toogleModal} close={toogleModal}>
          <p className={styles.text}>
            Are you sure you want to edit the contact
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
