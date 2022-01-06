import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './ContactForm.module.scss';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  id: '',
  name: '',
  number: '',
  email: '',
};

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState(initialState);

  const { name, number, email } = state;

  const handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(), // uuid
      name,
      number: Number(number),
      email,
    };

    onSubmit(newItem);
  };

  const handleChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <span className={styles.span}>Name:</span>
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleChange}
              className={styles.input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.span}>Email:</span>
            <input
              className={styles.input}
              type="text"
              value={email}
              name="email"
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            />
          </label>
          <label>
            <input
              className={styles.input}
              type="tel"
              value={number}
              name="number"
              onChange={handleChange}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            />
          </label>
          <button className={styles.btn} type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
