import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react'
import css from '../../components/ContactList/ContactItem.module.css'

const Contacts = () => {
  return (
    <div className={css.contact}>
       <ContactForm/>
        <h2 className={css.title}>Contacts</h2>
        <Filter/>
        <ContactList/>
    </div>
  )
}

export default Contacts;