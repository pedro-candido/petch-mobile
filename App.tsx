import { ThemeProvider } from 'styled-components/native';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Login from './src/pages/Login/Login';
import store from './src/redux/store';
import theme from './src/theme';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold,
  Baloo2_800ExtraBold,
} from '@expo-google-fonts/baloo-2';

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_500Medium,
    Baloo2_600SemiBold,
    Baloo2_700Bold,
    Baloo2_800ExtraBold,
  });

  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Baloo2_400Regular: require('./src/fonts/Baloo2-Regular.ttf'),
        Baloo2_500Medium: require('./src/fonts/Baloo2-Medium.ttf'),
        Baloo2_600SemiBold: require('./src/fonts/Baloo2-SemiBold.ttf'),
        Baloo2_700Bold: require('./src/fonts/Baloo2-Bold.ttf'),
        Baloo2_800ExtraBold: require('./src/fonts/Baloo2-ExtraBold.ttf'),
      }))();
    setIsFontLoaded(true);
  }, []);

  if (!fontsLoaded && !isFontLoaded) <AppLoading />;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </Provider>
  );
}
