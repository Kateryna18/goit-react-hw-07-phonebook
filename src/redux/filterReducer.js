import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "./actions";

const initialFilterReducer = '';

export const filterReducer = createReducer(initialFilterReducer, {
    [filterContact]: (state, action) => {return state = action.payload},
})