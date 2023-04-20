import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';
import User from '../../types/users';

const adapter = createEntityAdapter<User>({
  selectId: (item) => item.email,
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.users);

const NotesSlice = createSlice({
  name: 'Usuarios',
  initialState: adapter.getInitialState(),
  reducers: {
    addNote: adapter.addOne,
    removeNote: adapter.removeOne,
  },
});

export const { addNote, removeNote } = NotesSlice.actions;
export default NotesSlice.reducer;
