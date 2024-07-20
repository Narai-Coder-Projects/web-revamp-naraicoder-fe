import axios from 'axios';
import { getItemLocalStorage } from './localStorage';

// Buat instance axios
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Ganti dengan URL API Anda
});

// Tambahkan interceptor untuk menangani respons
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/auth/sign-in'; // Ganti dengan URL halaman login Anda
    }
    return Promise.reject(error);
  }
);

// Fungsi untuk melakukan GET request
const getRequestWithAuth = async (url) => {
  const getToken = getItemLocalStorage<string>('token');
  try {
    const response = await api.get(url, {
      headers: { Authorization: `Bearer ${getToken}` }
    });
    if (response.data.code === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in GET request', error);
    throw error;
  }
};

// Fungsi untuk melakukan POST request
const postRequest = async (url, data = {}, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    if (response.data.code === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in POST request', error);
    throw error;
  }
};

const postRequestWithAuth = async (url, data = {}, ) => {
  const getToken = getItemLocalStorage<string>('token');
  console.log('data', data)
  try {
    const response = await api.post(url, data, {
      headers: { Authorization: `Bearer ${getToken}` }
    });
    console.log('res try', response)
    if (response.data.code === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in POST request', error);
    throw error;
  }
};
const postRequestWithAuthMultiple = async (url, data = {}, ) => {
  const getToken = getItemLocalStorage<string>('token');
  try {
    const response = await api.post(url, data, {
      headers:{
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${getToken}` 
      }
    });
    if (response.data.code === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in POST request', error);
    throw error;
  }
};

const postPutRequestWithAuthMultiple = async (url, data = {}) => {
  const getToken = getItemLocalStorage<string>('token');
  try {
    const response = await api.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${getToken}`,
        'X-HTTP-Method-Override': 'PUT'
      }
    });
    if (response.data.code === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in POST request', error);
    throw error;
  }
};


// Fungsi untuk melakukan DELETE request
const deleteRequestWithAuth = async (url:string) => {
  const getToken = getItemLocalStorage<string>('token');
  try {
    const response = await api.delete(url, {
      headers: { Authorization: `Bearer ${getToken}` }
    });
    if (response.data.code === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error in DELETE request', error);
    throw error;
  }
};

export { getRequestWithAuth, postPutRequestWithAuthMultiple, postRequest, deleteRequestWithAuth,postRequestWithAuthMultiple, postRequestWithAuth };
