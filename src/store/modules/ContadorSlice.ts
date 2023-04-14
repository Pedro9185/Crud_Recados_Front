import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const ContadorSlice = createSlice({
  name: 'contador',
  initialState: 0,
  reducers: {
    incrementar: (state, action: PayloadAction<number>) => {
      return state + action.payload;
    },
    decrementar: (state, action: PayloadAction<number>) => {
      return state - action.payload;
    },
  },
});

export const { decrementar, incrementar } = ContadorSlice.actions;
export default ContadorSlice.reducer;
