import axios from 'axios';

const api = axios.create({ baseURL: 'https://restcountries.com/v3.1' });

export const getAllCountries = async () => {
  const { data } = await api.get('/all');
  return data;
};
