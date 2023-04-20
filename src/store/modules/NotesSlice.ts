import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import Task from '../../types/task';
import { RootState } from '..';

const adapter = createEntityAdapter<Task>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.notes);

const NotesSlice = createSlice({
  name: 'Recados',
  initialState: adapter.getInitialState(),
  reducers: {
    addNote: adapter.addOne,
    removeNote: adapter.removeOne,
    updateNote: adapter.updateOne,
  },
});

export const { addNote, removeNote, updateNote } = NotesSlice.actions;
export default NotesSlice.reducer;
