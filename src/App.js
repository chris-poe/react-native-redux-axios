import Expo from 'expo';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from './navigation/RootNavigator';
import SafeAreaView from './components/modules/Layout/SafeAreaView';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <RootNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default Expo.registerRootComponent(App);
