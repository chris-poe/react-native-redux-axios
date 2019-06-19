import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from './common/Layout';
import RootNavigator from '../navigation/RootNavigator';
import Landing from './screens/Landing';
import init from '../store/actions/common';

const App = ({ dispatch }) => {
  const [isAppReady, setAppState] = useState(false);

  useEffect(() => {
    dispatch(init()).then(() => setAppState(true));
  }, []);

  return (
    <SafeAreaView>{isAppReady ? <RootNavigator /> : <Landing />}</SafeAreaView>
  );
};

export default connect()(App);
