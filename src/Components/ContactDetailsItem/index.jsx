import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactItem/Contact.module.scss';
import { useParams } from 'react-router-dom';

const ContactDetailItem = ({ contacts, onClick }) => {
  let params = useParams();
  // const [detail, setDetail] = useState([]);
  // const getData = () => {
  //   console.log(data.id);
  // };

  // getData();
  // // useEffect(() => {

  // // }, []);
  console.log('contactId=', params.contactId);

  console.log({ contacts });

  return (
    <div>
      <ul className={styles.list}>
        {contacts
          //  .filter(contact => contact.id === params.contactId)
          .map(({ name, id, surname, tel }) => (
            <li key={id} className={styles.item}>
              <div className={styles.span_container}>
                <span className={styles.item_name}>{name}:</span>
                <span className={styles.item_name}>{surname}</span>{' '}
                <span className={styles.item_name}>{tel}</span> {/* </div> */}
              </div>
              <button
                id={id}
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
          ))}
      </ul>
      {/* <button onClick={goBack}>go Back</button>; */}
    </div>
  );
};
ContactDetailItem.propTypes = {
  contacts: PropTypes.array,
};

export default ContactDetailItem;
