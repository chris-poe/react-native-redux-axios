import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import { HomeNavigator, HomeIcon } from './Home';
import CameraNavigator from './Camera';

import { colors } from '../components/common/theme';

const TabBarNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeNavigator },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => HomeIcon,
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
    Camera: { screen: CameraNavigator },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const RootNavigator = createStackNavigator(
  {
    Main: { screen: MainNavigator },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default RootNavigator;
