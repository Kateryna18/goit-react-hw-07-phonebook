import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';

export function App() {
  const { items, isLoading, error} = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <ContactsList/>}
      <Toaster />
    </div>
  );
}
