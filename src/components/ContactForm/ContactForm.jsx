import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
  const onAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name === 'name'){
      setName(value);
    }else if(name === 'number'){
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const nameExists = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

    if (nameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    }

    setName('');
    setNumber('');
    onAddContact(newContact);
  };

    return (
      <div className={css.contact_wrapper}>
        <form onSubmit={handleSubmit} className={css.contact_form}>
          <label className={css.label}>
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder='Enter your name...'
              maxLength={15}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
              className={css.input}
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <input
              type="tel"
              name="number"
              placeholder='Enter your number...'
              maxLength={15}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
              className={css.input}
            />
          </label>
          <button type='submit' className={css.btn}>Add contact</button>
        </form>
      </div>
    );
  };

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
