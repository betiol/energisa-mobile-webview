/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  WebView,
  Text,
  View
} from 'react-native';

class webViewenergisa extends Component {
  render() {
    return (
        <WebView
          source={{uri: 'http://energisa.codigo5.com.br'}}
          style={{marginTop: 20}}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('webViewenergisa', () => webViewenergisa);
