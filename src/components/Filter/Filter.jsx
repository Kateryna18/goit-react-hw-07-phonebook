import React from 'react';
import css from 'components/Filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(filterContact(value));
  }

    return (
    <div className={css.filterBox}>
        <input className={css.filterInput} placeholder='Search contacts' type="text" onChange={handleChange} name="filter"/>
    </div>
  )
}