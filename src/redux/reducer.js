import { combineReducers } from '@reduxjs/toolkit';
import { conctactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const reducer = combineReducers({
  contacts: conctactsReducer,
  filter: filterReducer,
})