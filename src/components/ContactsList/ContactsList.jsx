import React from 'react';
import css from 'components/ContactsList/ContactsList.module.css';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactsList() {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filter);

    const filteredContacts = contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filter.toLowerCase().trim())
    );

    return (
    <ul className={css.contactsList}>
        {filteredContacts.map(contact => <ContactItem contactObj={contact} key={contact.id}/>)}
    </ul>
  )
}