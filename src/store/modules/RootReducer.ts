import { combineReducers } from '@reduxjs/toolkit';
import NotesSlice from './NotesSlice';
import UserSlice from './UserSlice';

export default combineReducers({
  notes: NotesSlice,
  users: UserSlice,
});
