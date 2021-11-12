import { ThemeProvider } from 'styled-components/native';
import React from 'react';
import { Provider } from 'react-redux';
import Login from './src/pages/Login/Login';
import store from './src/redux/store';
import theme from './src/theme';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </Provider>
  );
}
