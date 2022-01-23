import { combineReducers } from '@reduxjs/toolkit';
import darkModeReducers from './darkMode/reducer';
import darkModeReducer from './darkMode/reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});
export default rootReducer;