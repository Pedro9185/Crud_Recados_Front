import { combineReducers } from '@reduxjs/toolkit';
import ContadorSlice from './ContadorSlice';

export default combineReducers({
  contador: ContadorSlice,
});
