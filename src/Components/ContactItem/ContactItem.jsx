import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';
import { Link, useLocation } from 'react-router-dom';
import Icons from '../Icon';
// import RemoveBtn from '../RemoveBtn';

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
        <span className={styles.item_name}>{contact.surname}</span>
        <span className={styles.item_tel}>{contact.telephone}</span>{' '}
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
          color="rgb(27, 27, 29)"
          size="20"
          className={styles.item_icon}
        />
      </button>
      {/* <RemoveBtn onClick={onClick} /> */}
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    telephone: PropTypes.number,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
