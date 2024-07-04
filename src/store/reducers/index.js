import {combineReducers} from '@reduxjs/toolkit';
import contactSlice from './contactSlice';
import themeSlice from './themeSlice';

const rootReducers = combineReducers({
  contacts: contactSlice,
  theme: themeSlice,
});

export default rootReducers;
