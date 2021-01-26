import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodo } from './thunks';

export interface HomeState {
  value: number;
}

const initialState: HomeState = {
  value: 0,
};

const homeSlice = createSlice({
  name: 'home',
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

export const { todo } = homeSlice.actions;
export default homeSlice.reducer;
