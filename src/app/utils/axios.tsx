import axios from 'axios';

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
const getRequest = async (url, config = {}) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    console.error('Error in GET request', error);
    throw error;
  }
};

// Fungsi untuk melakukan POST request
const postRequest = async (url, data = {}, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error('Error in POST request', error);
    throw error;
  }
};

// Fungsi untuk melakukan DELETE request
const deleteRequest = async (url, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    console.error('Error in DELETE request', error);
    throw error;
  }
};

export { getRequest, postRequest, deleteRequest };
