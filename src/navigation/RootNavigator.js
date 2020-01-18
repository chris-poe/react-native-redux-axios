import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigator, HomeIcon } from './Home';
import { colors } from '../components/common/theme';

const Stack = createStackNavigator();

const RootNavigator = () => (
  <NavigationNativeContainer>
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen component={HomeNavigator} />
    </Stack.Navigator>
  </NavigationNativeContainer>
);

/* const TabBarNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeNavigator },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: () => HomeIcon,
    tabBarOptions: {
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
    },
  }
);

const MainNavigator = createStackNavigator(
  {
    Home: { screen: TabBarNavigator },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    cardStyle: { shadowColor: 'transparent' },
  }
);

const RootNavigator = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: MainNavigator },
    },
    {
      headerMode: 'none',
      cardStyle: { shadowColor: 'transparent' },
      mode: 'modal',
      defaultNavigationOptions: {
        gesturesEnabled: false,
      },
    }
  )
); */

export default RootNavigator;
