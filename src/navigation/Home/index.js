import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '../../components/common/Icon';
import HomeScreen from '../../components/screens/Home';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: Platform.select({
        android: {
          flex: 1,
          textAlign: 'center',
        },
      }),
      headerLeft: null,
      headerRight: null,
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      headerMode="none"
      options={{ title: 'Home' }}
    />
  </Stack.Navigator>
);

const HomeIcon = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-home" size={32} color={tintColor} />
  ),
};

export { HomeNavigator, HomeIcon };
