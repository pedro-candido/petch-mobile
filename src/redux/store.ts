import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>;
export default store;
