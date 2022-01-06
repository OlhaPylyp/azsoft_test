import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { createUseStyles } from 'react-jss';
import styles from './ContactList.module.scss';

const ContactList = ({ contacts, onClick }) => {
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <ContactItem contact={contact} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
