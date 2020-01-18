import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../components/common/theme';

import { HomeNavigator, HomeIcon } from './Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={() => HomeIcon}
    tabBarOptions={{
      inactiveTintColor: colors.mediumGray,
      showIcon: true,
      showLabel: false,
      iconStyle: {
        width: 32,
        height: 32,
      },
      style: {
        height: 70,
        backgroundColor: colors.white,
      },
    }}
  >
    <Tab.Screen component={HomeNavigator} />
  </Tab.Navigator>
);

const RootNavigator = () => (
  <NavigationNativeContainer>
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen component={TabNavigator} />
    </Stack.Navigator>
  </NavigationNativeContainer>
);

export default RootNavigator;
