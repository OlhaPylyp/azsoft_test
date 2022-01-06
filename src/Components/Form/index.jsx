import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import RemoveBtn from '../RemoveBtn';

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
    name: 'tel',
    value: '',
    type: 'tel',
    pattern:
      '+?( |-|.)?d{1,2}( |-|.)?)?((?d{3})?|d{3})( |-|.)?(d{3}( |-|.)?d{4}',
    title: 'Имя может состоять только из букв, апострофа, тире и пробелов. ',
    added: false,
  },
];

const Form = ({ onSubmit }) => {
  const [state, setState] = useState(contactsArray);

  const handleSubmit = e => {
    e.preventDefault();
    const newValue = state.map(({ value }) => value);
    const newItem = {
      id: uuidv4(), // uuid
      name: newValue[0],
      surname: newValue[1],
      tel: newValue[2],
    };

    console.log(newItem);

    onSubmit(newItem);
  };
  let handleChange = (i, e) => {
    let newFormValues = [...state];
    // const name = newFormValues.map(({ name }) => name);
    // const value = newFormValues.map(({ value }) => value);
    const newValue = state.find(({ name }) => name === e.target.name);
    if (newValue) {
      newValue.value = e.target.value;
      state[newValue.id] = newValue;
      setState([...state]);
      console.log('state', state);
    }

    // setState(prevState => ({
    //   ...state,
    //   [e.target.name]: e.target.value,
    // }));
    console.log('newFormValues', newFormValues);
  };

  // let addFormFields = () => {
  //   const addInput = state.contacts.filter(({ added }) => added === false);
  //   setState([...prevState, newContact]);
  // };
  let addFormFields = () => {
    const newItem = state.find(({ added }) => added === false);
    if (newItem) {
      newItem.added = true;
      state[newItem.id] = newItem;
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
              <div className={styles.form_inline} key={index}>
                <label className={styles.label}>
                  <span className={styles.span}>{name}:</span>
                  <input
                    className={`${styles.input} ${styles.input} `}
                    type={type}
                    name={name}
                    // value={name}
                    onChange={e => handleChange(index, e)}
                    pattern={pattern}
                    title={title}
                  />
                </label>
                {index ? (
                  <button
                    type="button"
                    className={styles.btnRemove}
                    onClick={() => removeFormFields(index)}
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
              + Fild
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
