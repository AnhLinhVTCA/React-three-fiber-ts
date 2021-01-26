import axios from 'utils/axios';

import UsersService from './users';

export const usersService = new UsersService(axios);
