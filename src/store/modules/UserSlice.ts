import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';
import User from '../../types/users';

const adapter = createEntityAdapter<User>({
  selectId: (item) => item.email,
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.users);

const UserSlice = createSlice({
  name: 'Usuarios',
  initialState: adapter.getInitialState(),
  reducers: {
    addUser: adapter.addOne,
    removeUser: adapter.removeOne,
  },
});

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
