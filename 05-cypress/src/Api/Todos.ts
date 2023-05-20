import Axios from 'axios';

const getAuthToken = () => {
  return window.localStorage.getItem('authToken');
};

export const api = Axios.create({ baseURL: 'http://localhost:3010/api/todos', headers: { Authorization: getAuthToken() } });
