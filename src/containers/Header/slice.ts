import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodo } from './thunks';

export interface HeaderState {
  value: number;
}

const initialState: HeaderState = {
  value: 0,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    todo(state, action: PayloadAction<number>) {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => ({
      ...state,
      value: action.payload.value,
    }));
  },
});

export const { todo } = headerSlice.actions;
export default headerSlice.reducer;
