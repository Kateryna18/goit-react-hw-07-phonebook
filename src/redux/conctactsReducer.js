import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';
import toast from 'react-hot-toast';

const contactsInitialState = [];

export const conctactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    if (state.some(item => item.name === action.payload.name)) {
      toast.error('Contact already exists');
      return;
    }
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});