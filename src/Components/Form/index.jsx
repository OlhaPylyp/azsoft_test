import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import RemoveBtn from '../RemoveBtn';
import Modal from '../Modal';

const contactsArray = [
  {
    id: 0,
    name: 'name',
    value: '',
    type: 'text',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title: 'Имя может состоять только из букв, апострофа, тире и пробелов. ',
    added: true,
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

const Form = ({ onSubmit, onClick }) => {
  const [state, setState] = useState(contactsArray);
  // const [showModal, setModal] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    // const newState = ['name', 'surname', 'tel', 'email'].map(
    //   item => state.find(({ name }) => name === item).value,
    // );

    const newItem = {
      id: uuidv4(), // uuid
      name: state.find(({ name }) => name === 'name').value,
      surname: state.find(({ name }) => name === 'surname').value,
      telephone: state.find(({ name }) => name === 'telephone').value,
      email: state.find(({ name }) => name === 'email').value,
      work: state.find(({ name }) => name === 'work').value,
    };

    console.log(newItem);

    onSubmit(newItem);
  };
  let handleChange = (i, e) => {
    const newValue = state.find(({ name }) => name === e.target.name);
    if (newValue) {
      newValue.value = e.target.value;
      state[newValue.id] = newValue;
      setState([...state]);
      console.log('state', state);
    }
  };
  // const toogleModal = setModal(!showModal);
  let addFormFields = () => {
    const newItem = state.find(({ added }) => added === false);
    if (newItem) {
      newItem.added = true;
      // state[newItem.id] = newItem;
      setState([...state]);
    }
  };
  let removeFormFields = i => {
    let newFormValues = [...state];
    newFormValues.splice(i, 1);
    setState(newFormValues);
  };

  return (
    <>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {state.map(({ name, type, title, value, pattern, added }, index) =>
            added ? (
              <div className={styles.form_field} key={index}>
                <label className={styles.form_label}>
                  {name}
                  <input
                    className={`${styles.form_input}  `}
                    type={type}
                    name={name}
                    // value={name}
                    onChange={e => handleChange(index, e)}
                    pattern={pattern}
                    title={title}
                  />
                </label>
                {/* {showModal && (
                  <Modal onClick={() => toogleModal} close={toogleModal}>
                    <p className={styles.text}>
                      Are you sure you want to delete the contact
                    </p>
                    <button className={styles.btn} onClick={removeFormFields}>
                      Yes
                    </button>
                    <button className={styles.btn} onClick={toogleModal}>
                      No
                    </button>
                  </Modal>
                )} */}
                {index ? (
                  <button
                    type="button"
                    className={styles.btnRemove}
                    onClick={removeFormFields}
                  >
                    -
                  </button>
                ) : null}
              </div>
            ) : null,
          )}
          {/* <button
            type="button"
            className={styles.btnRemove}
            onClick={() => removeFormFields()}
          >
            -
          </button>
          , */}
          <div className={styles.btn_container}>
            <button className={styles.btn} type="submit">
              Save
            </button>
            <button
              className={styles.btn}
              onClick={() => addFormFields()}
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
};

export default Form;
