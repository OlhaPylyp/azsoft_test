import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactDetailsItem.module.scss';
import { useLocation, Link, useParams, useNavigate } from 'react-router-dom';
// import RemoveBtn from '../RemoveBtn';
import Icons from '../Icon';

const ContactDetailItem = ({ contacts, onClick, location: { state } }) => {
  // useEffect(() => {
  //   const storageContacts = localStorage.getItem('contacts');
  //   setContacts(JSON.parse(storageContacts));
  // }, []);
  let params = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const { pathname, search } = location;
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(({ name, id, surname, telephone, workplace, email }) => (
          <li key={id} className={styles.item}>
            <ul className={styles.item_container}>
              <li className={styles.item_name}>Name:{name}</li>
              <li className={styles.item_name}>Surname:{surname}</li>{' '}
              <li className={styles.item_name}>Telephone:{telephone}</li>
              <li className={styles.item_name}>Email:{email}</li>
              <li className={styles.item_name}>Workplace:{workplace}</li>
            </ul>
            {/* <Link to="/ContactDetailPage"> */}
            <button
              type="button"
              onClick={() =>
                navigate({
                  pathname: '/ContactDetailPage',
                  search: `?query=${state.query}`,
                })
              }
              className={styles.item__btn}
            >
              <Icons
                name="pencil2"
                color="rgb(27, 27, 29)"
                size="20"
                className={styles.item_icon}
              />
            </button>
            {/* </Link> */}
          </li>
        ))}
      </ul>

      {/* <button onClick={goBack}>go Back</button>; */}
    </div>
  );
};

ContactDetailItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    // number: PropTypes.number.isRequired,
  }),
  // onClick: PropTypes.func.isRequired,
};

export default ContactDetailItem;
