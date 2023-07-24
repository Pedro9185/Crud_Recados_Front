import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface Task {
  id: string;
  task: string;
  detail: string;
  favorite: boolean;
}

export const getTaskAsynkThunk = createAsyncThunk('/tasks', async (id: string) => {
  const response = await fetch('http://localhost:8080/tasks', { method: 'GET', headers: { id } });
  const body = await response.json();

  return body;
});

const adapter = createEntityAdapter<Task>({
  selectId: (item) => item.id,
});

const slice = createSlice({
  name: 'task',
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTaskAsynkThunk.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload);
    });
    builder.addCase(getTaskAsynkThunk.rejected, (state, action) => {
      console.log('Error', action.error);
    });
  },
});

export const TasksSlice = slice.reducer;
export const { selectAll } = adapter.getSelectors((state: RootState) => state.tasks);
