import axios from 'axios';

import superaxios from '@services/superaxios';
import { API_URL } from '@config';
import { authTypes } from '@store/auth';

export default {
  fetchTodos: async () => {
    const response = await axios.get(API_URL.GET_TODOS);
    return response.data;
  },
  auth: {
    login: async (data: authTypes.LoginData): Promise<authTypes.LoginResponse> => {
      const response = await superaxios.post(API_URL.AUTH.LOGIN, data);
      return response.data;
    },
  },
};
