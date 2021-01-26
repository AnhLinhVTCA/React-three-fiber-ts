import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { FetchTodoRequest, FetchTodoResponse } from 'types';

export default class UsersService {
  private readonly axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  fetchTodo = (params: FetchTodoRequest): AxiosPromise<FetchTodoResponse> => {
    const request: AxiosRequestConfig = {
      url: '/',
      params: params,
    };
    return this.axios(request);
  };
}
