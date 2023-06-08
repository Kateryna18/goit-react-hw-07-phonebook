import React from 'react';
import css from 'components/ContactItem/ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export function ContactItem({contactObj}) {

    const dispatch = useDispatch();
    
  return (
    <li  className={css.contactsItem}>
                    <div>
                    <span className={css.contactsItemName}>{contactObj.name}</span>:
                    <span className={css.contactsItemNumber}> {contactObj.phone}</span>
                    </div>
                    <button className={css.contactsItemButton} onClick={() => dispatch(deleteContact(contactObj.id))}>Delete</button>
                </li>
  )
}