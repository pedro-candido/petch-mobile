import { RootState } from '../../redux/store';

export const selectLogin = (state: RootState) => state.login;

export const selectEmail = (state: RootState) => state.login.email;

export const selectPassword = (state: RootState) => state.login.password;
