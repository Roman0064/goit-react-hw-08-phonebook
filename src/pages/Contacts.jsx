import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react'

const Contacts = () => {
  return (
    <div>
       <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
    </div>
  )
}

export default Contacts;