import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set: token => {
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
      const { data } = await instance.post('/users/signup', formData);
      token.set(data.token);

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
      const { data } = await instance.post('/users/login', formData);
      token.set(data.token);

      return data;
    }catch (error ){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (thunkAPI) => {
    try { 
      await instance.post('/users/logout');
      token.clear();

      return;
    }catch (error ){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const userToken = state.auth.token;

    if (userToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      token.set(userToken);
      const { data } = await instance.get('/users/current');

      return data;
    }catch ( error ){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/contacts');

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      try {
        const { data } = await instance.post('/contacts', contact);

        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
