import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getContact, addContact, deleteContact } from './contactOperasions';
import filterContact from './action/FilterChange';

const itemReducer = createReducer([], {
  [getContact.fulfilled]: (_state, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload.id),
});

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const contactReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactReducer;
