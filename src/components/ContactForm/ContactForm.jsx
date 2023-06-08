import css from 'components/ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../redux/operations';


export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contactData = { name, phone };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    
    dispatch(addContact(contactData))
    reset()
  };

  const handleChange = e => {
        switch (e.target.name) {
          case 'name':
            setName(e.target.value);
            break;
    
          case 'number':
            setPhone(e.target.value);
            break;
    
          default:
            return;
        }
      };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formLabelBox}>
        <label className={css.formLabel}>
          Name{' '}
          <input
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.formLabel}>
          Number{' '}
          <input
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={phone}
          />
        </label>
      </div>
      <button className={css.formButton} type="submit">
        Add Contact
      </button>
    </form>
  );
}