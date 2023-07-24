import { combineReducers } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import UsersSlice from './UsersSlice';
import { TasksSlice } from './TaskSlice';

export default combineReducers({
  user: UserSlice,
  tasks: TasksSlice,
  users: UsersSlice,
});
