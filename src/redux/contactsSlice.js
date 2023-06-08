import { createSlice, nanoid } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                if (state.some(item => item.name === action.payload.name)) {
                    toast.error('Contact already exists');
                    return;
                  }
                state.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        id: nanoid(6),
                        ...contact,
                    },
                }
            }  
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        }
    },
});

export const {addContact, deleteContact} = contactsSlice.actions;
export const conctactsReducer = contactsSlice.reducer;