import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
        state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
        state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
        state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
        state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
        state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },

//   reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     if (state.items.some(item => item.name === action.payload.name)) {
    //       toast.error('Contact already exists');
    //       return;
    //     }
    //     state.items.push(action.payload);
    //   },
    //   prepare(contact) {
    //     return {
    //       payload: {
    //         id: nanoid(6),
    //         ...contact,
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload
    //   );
    //   if (index !== -1) {
    //     state.items.splice(index, 1);
    //   }
    // },
//   },
});


export const conctactsReducer = contactsSlice.reducer;
