/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/ConfigureStore';
import Router from './src/container/Router';

const store = configureStore();

export default class App extends Component<{}> {
  render() {
    return (
       <Provider store={store}>
          <Router />
       </Provider>
    );
  }
}
