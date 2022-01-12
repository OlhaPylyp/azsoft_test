import { React, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import queryString from 'query-string';

import Modal from '../Modal';
import Icons from '../Icon';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from 'react-router-dom';

const contactsArray = [
  {
    id: 0,
    name: 'name',
    value: '',
    type: 'text',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title: 'Имя может состоять только из букв, апострофа, тире и пробелов. ',
    added: true,
    required: '',
  },
  {
    id: 1,
    name: 'surname',
    value: '',
    type: 'text',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title: 'Имя может состоять только из букв, апострофа, тире и пробелов. ',
    added: true,
  },
  {
    id: 2,
    name: 'email',
    value: '',
    type: 'email',
    pattern:
      '+?( |-|.)?d{1,2}( |-|.)?)?((?d{3})?|d{3})( |-|.)?(d{3}( |-|.)?d{4}',
    title: 'Имя может состоять только из букв, апострофа, тире и пробелов. ',
    added: false,
  },
  {
    id: 3,
    name: 'telephone',
    value: '',
    type: 'telephone',
    pattern:
      '+?( |-|.)?d{1,2}( |-|.)?)?((?d{3})?|d{3})( |-|.)?(d{3}( |-|.)?d{4}',
    title: 'Имя может состоять только из букв, апострофа, тире и пробелов. ',
    added: false,
  },
  {
    id: 4,
    name: 'work',
    value: '',
    type: 'text',
    pattern:
      '+?( |-|.)?d{1,2}( |-|.)?)?((?d{3})?|d{3})( |-|.)?(d{3}( |-|.)?d{4}',
    title: 'Место роботы только из букв, апострофа, тире и пробелов. ',
    added: false,
  },
];

const Form = ({ onSubmit, onClick, idAdded }) => {
  const [state, setState] = useState(contactsArray);
  const [deleteInput, setDelete] = useState('');
  const [showModal, setModal] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();

  //const [query, setQuery] = useState([]);
  // const valueSearch = searchParams.get('name') || '';

  const location = useLocation();
  let navigate = useNavigate();
  // const inputRef = useRef();

  const { pathname, search } = location;
  // useEffect(() => {
  //   navigate({
  //     pathname: `/ContactDetailPage/${idAdded}`,
  //     // // state: {
  //     // //   query,
  //     // // },
  //     // search: `?${createSearchParams(params)}`,
  //   });
  // });

  //const [query, setQuery] = useState(queryString.parse(search).query || '');
  // // useEffect(() => {
  //   // inputRef.current.focus();
  // }, []); // eslint-disable-line
  // const params = {
  //   name: state.find(({ name }) => name === 'name').value,
  //   surname: state.find(({ name }) => name === 'surname').value,
  // };

  // const goToContactInfo = () => {
  //   navigate({
  //     pathname: `/ContactDetailPage/${idAdded}`,
  //     // // state: {
  //     // //   query,
  //     // // },
  //     // search: `?${createSearchParams(params)}`,
  //   });
  // };

  const handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      // id: idAdded === '' ? uuidv4() : idAdded,
      id: uuidv4(),
      name: state.find(({ name }) => name === 'name').value,
      surname: state.find(({ name }) => name === 'surname').value,
      telephone: state.find(({ name }) => name === 'telephone').value,
      email: state.find(({ name }) => name === 'email').value,
      work: state.find(({ name }) => name === 'work').value,
    };

    onSubmit(newItem);
    // state.map(item => (item.value = ''));
    navigate({
      pathname: `/ContactDetailPage/${idAdded}`,
      // // state: {
      // //   query,
      // // },
      // search: `?${createSearchParams(params)}`,
    });
  };

  let handleChange = (i, e) => {
    const newValue = state.find(({ name }) => name === e.target.name);

    if (newValue) {
      newValue.value = e.target.value;
      state[newValue.id] = newValue;
      setState([...state]);
    }

    // const query = e.target.value;
    // console.log('query', query);
    // const params = {};
    // if (query.length) params.name = query;
    // setSearchParams(params);
    // console.log('params', searchParams.get(params));
    // setQuery(e.target.value);
    // navigate({
    //   search: `?query=""`,
    // });
  };

  let addFormFields = () => {
    const newItem = state.find(({ added }) => added === false);
    if (newItem) {
      newItem.added = true;
      setState([...state]);
    }
  };
  const toogleModal = () => setModal(!showModal);
  const showModalForDeleteContact = idItem => {
    setDelete(idItem);
    toogleModal();
  };
  let removeFormFields = () => {
    const newContactList = state.filter(contact => contact.id !== deleteInput);
    setState([...newContactList]);
    toogleModal();
  };

  return (
    <>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {state.map(
            ({ name, type, title, value, pattern, added, id }, index) =>
              added ? (
                <div className={styles.form_field} key={id}>
                  <label className={styles.form_label}>
                    {name}
                    <input
                      className={`${styles.form_input}  `}
                      type={type}
                      name={name}
                      value={value}
                      // ref={inputRef}
                      onChange={e => handleChange(index, e)}
                      pattern={pattern}
                      title={title}
                      autoComplete="off"
                      required
                    />
                  </label>
                  {showModal && (
                    <Modal onClick={toogleModal} onClose={toogleModal}>
                      <p className={styles.text}>
                        Are you sure you want to delete input field {name}
                      </p>
                      <button className={styles.btn} onClick={removeFormFields}>
                        Yes
                      </button>
                      <button className={styles.btn} onClick={toogleModal}>
                        No
                      </button>
                    </Modal>
                  )}
                  {id ? (
                    <button
                      type="button"
                      className={styles.btnRemove}
                      onClick={() => showModalForDeleteContact(id)}
                    >
                      <Icons
                        name="bin"
                        color="rgb(226, 67, 3)"
                        size="15"
                        className={styles.item_icon}
                      />
                    </button>
                  ) : null}
                </div>
              ) : null,
          )}

          <div className={styles.btn_container}>
            {/* <Link
              to={}
              // className={styles.btn}
            > */}
            <button className={styles.btn} type="submit" onClick={handleSubmit}>
              Save
            </button>
            {/* </Link> */}
            <button
              className={styles.btn}
              onClick={addFormFields}
              type="button"
            >
              + Input
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  added: PropTypes.bool,
};

export default Form;
