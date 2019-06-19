import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import { HomeNavigator, HomeIcon } from './Home';

import { colors } from '../components/common/theme';

const TabBarNavigator = createBottomTabNavigator(
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
);

export default RootNavigator;
