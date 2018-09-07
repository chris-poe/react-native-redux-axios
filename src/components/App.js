import React, { Component } from 'react';
import { connect } from 'react-redux';
import SafeAreaView from './modules/Layout/SafeAreaView';
import RootNavigator from '../navigation/RootNavigator';
import Landing from './screens/Landing';

import {
  APP_LOAD,
} from '../constants/actionTypes';

const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded,
  });

const mapDispatchToProps = dispatch => ({
	onLoad: () =>
		dispatch({ type: APP_LOAD }),
});

class App extends Component {

	async componentDidMount() {
		await new Promise(resolve => setTimeout(resolve, 2000));
		this.props.onLoad();
	};

  render() {
    return (
      <SafeAreaView>
        {this.props.appLoaded ? (
          <RootNavigator />
		    ) : (
  <Landing />
		    )}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
