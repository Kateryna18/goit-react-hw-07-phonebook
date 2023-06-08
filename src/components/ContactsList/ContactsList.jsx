import css from 'components/ContactsList/ContactsList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export function ContactsList() {
  const { items } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  
  const filteredContacts = items.filter(contact =>
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