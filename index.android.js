/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux'
import store from './app/config/store'
import App from './app/index'


export default class hApp extends Component {
  render() {
    return (
       <Provider store={store}>
          <App />
        </Provider>
    );
  }
}

AppRegistry.registerComponent('hApp', () => hApp);
