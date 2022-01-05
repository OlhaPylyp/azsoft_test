import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactItem/Contact.module.scss';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 10,
  },
});

const ContactDetailItem = ({
  match: {
    params: { id },
  },
  history: { goBack },
  contacts,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {console.log(contacts)}
      {contacts
        .filter(contact => contact.id === id)
        .map(contact => (
          <li key={contact.id} className={classes.item}>
            <div className={styles.contact_list}>
              {' '}
              <span className={styles.contact_item_name}>{contact.name}:</span>
              <span className={styles.contact_item_tel}>
                {contact.number}
              </span>{' '}
              <span className={styles.contact_item_tel}>{contact.email}</span>{' '}
            </div>
            <button id={contact.id} type="button" onClick={onClick}>
              Изменить
            </button>
            <button onClick={goBack}>go Back</button>)
          </li>
        ))}
    </ul>
  );
};

ContactDetailItem.propTypes = {
  contacts: PropTypes.array,
};

export default ContactDetailItem;
