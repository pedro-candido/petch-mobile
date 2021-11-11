import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteNames } from '../constants/Enums';

const Stack = createNativeStackNavigator();

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Screen name={RouteNames.LOGIN} component={() => <Text>{RouteNames.LOGIN}</Text>} />
      <Stack.Screen name={RouteNames.HOME} component={() => <Text>{RouteNames.HOME}</Text>} />
      <Stack.Screen
        name={RouteNames.CREATE_ACCOUNT}
        component={() => <Text>{RouteNames.CREATE_ACCOUNT}</Text>}
      />
      <Stack.Screen
        name={RouteNames.FORGOT_PASSWORD}
        component={() => <Text>{RouteNames.FORGOT_PASSWORD}</Text>}
      />
      <Stack.Screen name={RouteNames.SEARCH} component={() => <Text>{RouteNames.SEARCH}</Text>} />
      <Stack.Screen
        name={RouteNames.SETTINGS}
        component={() => <Text>{RouteNames.SETTINGS}</Text>}
      />
    </NavigationContainer>
  );
};

export default Navigation;
