import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { initialState } from './initialState';


const customOperationsArr = [fetchContacts, addContact, deleteContact];
const addStatusOperation = status => {
  return customOperationsArr.map(opertion => opertion[status]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledFetchContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleFulfilledAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;

  console.log('add contact')
  state.items.push(action.payload);
};

const handleFulfilledDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(contact => contact.id === action.payload);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetchContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addMatcher(isAnyOf(...addStatusOperation('pending')), handlePending)
      .addMatcher(isAnyOf(...addStatusOperation('rejected')), handleRejected);
  },
});

export const conctactsReducer = contactsSlice.reducer;

//   extraReducers: {
//     [fetchContacts.pending](state) {
//         state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchContacts.rejected](state, action) {
//         state.isLoading = false;
//       state.error = action.payload;
//     },
//     [addContact.pending](state) {
//         state.isLoading = true;
//     },
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addContact.rejected](state, action) {
//         state.isLoading = false;
//       state.error = action.payload;
//     },
//     [deleteContact.pending](state) {
//         state.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(contact => contact.id === action.payload);
//       state.items.splice(index, 1);
//     },
//     [deleteContact.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },

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
// });
