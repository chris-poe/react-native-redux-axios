import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from '../../components/common/Icon';

import CameraScreen from '../../components/screens/Camera';

const CameraNavigator = createStackNavigator({
  Camera: {
    screen: CameraScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Camera',
      headerTitleStyle: Platform.select({
        android: {
          flex: 1,
          textAlign: 'center',
          paddingRight: 45,
        },
      }),
      headerStyle: {
        paddingHorizontal: 15,
      },
      headerLeft: (
        <Icon
          name="ios-arrow-back-outline"
          onPress={() => navigation.goBack(null)}
          size={30}
        />
      ),
    }),
  },
});

export default CameraNavigator;
