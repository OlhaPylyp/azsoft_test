import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactDetailList.module.scss';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ContactDetailItem from '../ContactDetailsItem';
import Modal from '../Modal';

const ContactDetailList = () => {
  let params = useParams();

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
  const contactById = contacts.filter(({ id }) => id === params.contactId);

  const contactsArr = contactById.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {' '}
      <Link to="/" className={styles.link}>
        {' '}
        go Back
      </Link>
      {/* <button
        onClick={() =>
          navigate({
            pathname: '/ContactDetailPage',
            search: `?query=${state.query}`,
          })
        }
      >
        Go Back
      </button> */}
      <ContactDetailItem contacts={contactsArr} />
    </>
  );
};
ContactDetailList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactDetailList;
