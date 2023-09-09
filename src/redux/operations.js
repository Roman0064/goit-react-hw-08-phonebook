import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/'
});

export const token = {
  set: (token) => {
    instance.defaults.headers['Authorization'] = token;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
}; 

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, thunkAPI) => {
    try { 
      const { data } = await instance.post('users/signup', formData);
      console.log(data);
      
      return data;
    }catch (error ){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkAPI) => {
    try { 
      const { data } = await instance.post('users/login', formData);
      console.log(data);
      
      return data;
    }catch (error ){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', contact);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
