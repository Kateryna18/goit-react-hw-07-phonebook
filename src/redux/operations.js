import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6481881929fa1c5c50318c95.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", 
    async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch(error) {
        console.log(error.message)
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }

)


// export const fetchContacts = () => async dispatch => {
//     try {
//         dispatch(fetchingInProgress());
//         const response = await axios.get("/contacts");
//         const data = response.json()
//         dispatch(fetchingSuccess(data));
//     } catch(error) {
//         dispatch(fetchingError(error.message));
//     }

// }