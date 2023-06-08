import { createSlice, nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const contactsInitialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.items.some(item => item.name === action.payload.name)) {
          toast.error('Contact already exists');
          return;
        }
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(6),
            ...contact,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const conctactsReducer = contactsSlice.reducer;
