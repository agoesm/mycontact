import axios from 'axios';

const API_URL = 'https://contact.herokuapp.com/contact';
const header = {'Content-Type': 'application/json'};

export const getContactData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: header,
    });
    return response.data;
  } catch (error) {
    console.log('error fetching ==> ', error);
    throw error;
  }
};

export const addContactData = async payload => {
  // console.log('payload =>', payload);
  try {
    const response = await axios.post(API_URL, payload, {
      headers: header,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('error fetching ==> ', error);
    throw error;
  }
};

export const editContactData = async payload => {
  // console.log('payload =>', payload);
  const {id, ...newPayload} = payload;
  try {
    const response = await axios.put(`${API_URL}/${id}`, newPayload, {
      headers: header,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('error fetching ==> ', error);
    throw error;
  }
};

export const deleteContactData = async id => {
  // console.log('payload =>', payload);
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: header,
    });
    return response.data;
  } catch (error) {
    console.log('error fetching ==> ', error);
    throw error;
  }
};
