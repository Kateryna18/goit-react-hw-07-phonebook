import css from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../redux/operations';
import toast from 'react-hot-toast';


export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

  const contactData = { name, phone };

  const handleSubmit = e => {
    e.preventDefault();
    if(items.some(item => item.name === name)){
      toast.error('Contact already exists');
      return;
    }
    dispatch(addContact(contactData))
    reset()
  };

  const handleChange = e => {
        switch (e.target.name) {
          case 'name':
            setName(e.target.value);
            break;
    
          case 'phone':
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
        name="phone"
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