import { combineReducers } from '@reduxjs/toolkit';
import darkModeReducer from './darkMode/reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});
export default rootReducer;