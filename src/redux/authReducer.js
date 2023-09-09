import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './operations'

const initialState = {
  userData: null,
  isLoading: false,
  token: null,
  authenticated: false,
  error: null,
};

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    extraReducers: bulider => 
    bulider
//------------------REGISTER-------------------------
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.error = null;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
//------------------LOGIN-------------------------
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.error = null;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
})

export const authReducer = authSlice.reducer;
