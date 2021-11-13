import { createSlice } from '@reduxjs/toolkit';
import { LoginProps } from '../types';

const initialState: LoginProps = {
  email: '',
  password: '',
};

const slice = createSlice({
  initialState,
  name: 'login-reducer',
  reducers: {
    isEmailValid(state, action) {},
    isPasswordValid(state, action) {},
    setEmail({ email }, { payload }) {
      email = payload;
      console.log(email);
    },
    setPassword({ password }, { payload }) {
      password = payload;
      console.log(password);
    },
  },
});

const login = slice.reducer;
export default login;
export const { isEmailValid, isPasswordValid, setEmail, setPassword } = slice.actions;
