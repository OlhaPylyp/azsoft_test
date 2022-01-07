import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactDetailList.module.scss';
import { useParams, Link } from 'react-router-dom';
import ContactDetailItem from '../ContactDetailsItem';
import Modal from '../Modal';

const ContactDetailList = () => {
  let params = useParams();
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
  const contactById = contacts.filter(({ id }) => id === params.contactId);

  const contactsArr = contactById.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

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
ContactDetailList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactDetailList;
