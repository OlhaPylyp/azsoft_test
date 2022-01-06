import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './ContactForm.module.scss';
import { v4 as uuidv4 } from 'uuid';
import RemoveBtn from '../RemoveBtn';

const initialState = {
  id: '',
  name: '',
  surname: '',
  tel: '',
};

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState(initialState);
  const [inputs, setInputValues] = useState([{ value: '' }]);
  const { name, surname, tel } = state;

  const handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(), // uuid
      name,
      surname,
      tel: Number(tel),
    };

    onSubmit(newItem);
  };
  // onSubmit(inputs);
  const handleChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  let handleChangeNew = (i, e) => {
    let newFormValues = [...inputs];
    newFormValues[i][e.target.name] = e.target.value;
    setInputValues(newFormValues);
  };

  let addFormFields = () => {
    setInputValues([...inputs, { value: '' }]);
  };
  let removeFormFields = i => {
    let newFormValues = [...inputs];
    newFormValues.splice(i, 1);
    setInputValues(newFormValues);
  };
  console.log(inputs);
  return (
    <>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <span className={styles.span}>Surname</span>
            <input
              type="text"
              value={surname}
              name="surname"
              onChange={handleChange}
              className={styles.input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={styles.label}>
            <span className={styles.span}>Name</span>
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
          <label>
            <span className={styles.span}>Tel:</span>
            <input
              className={styles.input}
              type="tel"
              value={tel}
              name="tel"
              onChange={handleChange}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            />
          </label>

          {inputs.map((element, index) => (
            <>
              <div className={styles.form_inline} key={index}>
                <label className={styles.label}>
                  <span className={styles.span}>Email:</span>
                  <input
                    className={`${styles.inputAdd} ${styles.input} `}
                    type="text"
                    value={element.value || ''}
                    name="email"
                    onChange={e => handleChangeNew(index, e)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  />
                </label>

                {/* <label>WorkPlace</label>
              <input
                type="text"
                name="workPlace"
                value={element.workPlace || ''}
                onChange={e => handleChangeAdditional(index, e)} 
              /> */}
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
            </>
          ))}
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
