import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact", contact => {
    return {
        payload: {
            id: nanoid(6),
            ...contact,
        },
    }
});
export const deleteContact = createAction("contacts/deleteContact");
export const filterContact = createAction("filter/filterContact");