import axios from 'axios';

import { API_URL } from '@config';

export default {
  fetchTodos: async () => {
    const response = await axios.get(API_URL.GET_TODOS);
    return response.data;
  },
};
