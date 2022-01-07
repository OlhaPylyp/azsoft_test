import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';
import { Link, useLocation } from 'react-router-dom';
import Icons from '../Icon';

const ContactItem = ({ contact, onClick }) => {
  const { pathname } = useLocation();

  return (
    <li key={contact.id} className={styles.item}>
      {console.log('pathname', pathname)}
      <Link
        to={{ pathname: `/ContactDetailPage/${contact.id}` }}
        className={styles.item_link}
      >
        {/* <div className={styles.item__container}> */}{' '}
        <span className={styles.item_tel}>{contact.surname}</span>{' '}
        <span className={styles.item_name}>{contact.name}</span>
        {/* </div> */}
      </Link>

      <button
        id={contact.id}
        type="button"
        onClick={onClick}
        className={styles.item__btn}
      >
        <Icons
          name="bin"
          color="rgb(226, 67, 3)"
          size="20"
          className={styles.item_icon}
          onClick={onClick}
        />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
