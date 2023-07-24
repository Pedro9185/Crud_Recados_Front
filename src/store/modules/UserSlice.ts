import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import UserType from '../../Types/UserType';
import TaskType from '../../Types/TaskType';
import { getTaskAsynkThunk } from './TaskSlice';

interface UserState {
  user: UserType;
}

interface Login {
  email: string;
  password: string;
}

const initialState: UserState = {
  user: { email: '', password: '', tasks: [] },
};

export const loginAsyncThunk = createAsyncThunk('/login', async (data: Login, { dispatch }) => {
  const response = await fetch('http:localhost:8080/login', { method: 'POST', body: JSON.stringify(data) });

  const body = await response.json();
  dispatch(getTaskAsynkThunk(body));
});

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      return { user: action.payload };
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      const index = state.user.tasks.findIndex((item) => item.id === id);
      state.user.tasks[index].favorite = !state.user.tasks[index].favorite;
    },
    logout: () => {
      return initialState;
    },
    addNewTask: (state, action: PayloadAction<TaskType>) => {
      state.user.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<TaskType>) => {
      const task = action.payload;
      const index = state.user.tasks.findIndex((item) => item.id === task.id);

      state.user.tasks[index] = task;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.user.tasks.findIndex((item) => item.id === id);

      state.user.tasks.splice(index, 1);
    },
  },
});

export const { setUser, logout, toggleFavorite, addNewTask, updateTask, deleteTask } = UserSlice.actions;

export default UserSlice.reducer;
