import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from './common/Layout';
import RootNavigator from '../navigation/RootNavigator';
import Landing from './screens/Landing';
import { init } from '../actions/actionCreators/common';
import actionTypes from '../actions/actionTypes';

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
});

class App extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(init()).then(() => {
      dispatch({
        type: actionTypes.APP_LOAD,
        payload: true,
      });
    });
  }

  render() {
    return (
      <SafeAreaView>
        {this.props.appLoaded ? <RootNavigator /> : <Landing />}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps)(App);
