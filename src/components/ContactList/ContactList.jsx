import React, { useEffect } from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/operations';
import { selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAllContacts())
  },[dispatch]);

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  if (isLoading) {
    return <Loader/>;
  }
  
  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredContacts = getFilteredContacts();

  if(filteredContacts.length > 0) {
    return (
      <ul className={css.wrapper_item}>
        {filteredContacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
          />
        ))}
      </ul>
    );
  }else{
    return (
      <ul className={css.wrapper_item}>
        <span className={css.no_contact}>No contacts, add a contact</span>
      </ul>
    );
  }
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
