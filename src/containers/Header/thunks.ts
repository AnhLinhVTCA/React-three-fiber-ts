import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersService } from 'services';
import { FetchTodoResponse, FetchTodoRequest } from 'types';

export const fetchTodo = createAsyncThunk<FetchTodoResponse, FetchTodoRequest>('header/fetchTodo', async (params) => {
  //TODO call api
  const response = await usersService.fetchTodo(params);
  return { value: response.data.value ?? 20 };
});
