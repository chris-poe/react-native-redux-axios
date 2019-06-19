import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

export default registerRootComponent(() => (
  <Provider store={store}>
    <App />
  </Provider>
));
