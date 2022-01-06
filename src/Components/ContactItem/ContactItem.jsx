import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';
import { createUseStyles } from 'react-jss';
import { Route, Link, useLocation } from 'react-router-dom';
// import ContactDetailPage from '../../Pages/ContactDetailsPage/ContactDetailPage';

const ContactItem = ({ contact, onClick }) => {
  const { pathname } = useLocation();

  return (
    <li key={contact.id} className={styles.item}>
      <Link to={`${pathname}${contact.id}`} className={styles.item_link}>
        {/* <div className={styles.item__container}> */}{' '}
        <span className={styles.contact_item_name}>{contact.name}:</span>
        <span className={styles.item_tel}>{contact.number}</span> {/* </div> */}
      </Link>

      <button
        id={contact.id}
        type="button"
        onClick={onClick}
        className={styles.item__btn}
      >
        <svg
          onClick={onClick}
          width="20"
          height="20"
          viewBox="0 0 30 30"
          className={styles.item__basket}
        >
          <path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
          <path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
        </svg>
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
