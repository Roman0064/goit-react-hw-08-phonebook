import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations'

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
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
//------------------LOGOUT-------------------------
      .addCase(logoutUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
//------------------REFRESH  USER-------------------------
      .addCase(refreshUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = action.payload;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      ,
});

export const selectUserAuthentication = state => state.auth.authenticated;
export const selectUserData = state => state.auth.userData;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;

export const authReducer = authSlice.reducer;
