import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

export function App() {
  const { items } = useSelector((state) => state.contacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter
      />
      {items.length !== 0 && <ContactsList/>}
      <Toaster />
    </div>
  );
}
