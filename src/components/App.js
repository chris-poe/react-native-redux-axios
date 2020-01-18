import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from './common/Layout';
import RootNavigator from '../navigation/RootNavigator';
import Splash from './screens/Splash';
import init from '../store/actions/common';

const App = ({ dispatch }) => {
  const [isAppReady, setAppState] = useState(false);

  useEffect(() => {
    dispatch(init()).then(() => setAppState(true));
  }, []);

  return (
    <SafeAreaView>
      <>
        <StatusBar barStyle="dark-content" />
        {isAppReady ? <RootNavigator /> : <Splash />}
      </>
    </SafeAreaView>
  );
};

export default connect()(App);
