import axios from 'axios';

axios.defaults.baseURL = 'https://62ffb77e34344b6431ffd5ac.mockapi.io';

export const getContactApi = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContactApi = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContactApi = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
};
