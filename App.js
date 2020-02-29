import React, { Component } from 'react';
import {
  StyleSheet,
  View

} from 'react-native';

import Routes from './src/Routes';
import Statusbar from './src/components/Statusbar';
import COLORS from './src/components/colors';
export default class App extends Component {





  render() {
    return (
      <View style={styles.container}>
        <Statusbar backgroundColor="#000"
          barStyle="light-content"
        />
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.app,
    flex: 1,
    alignContent: 'center',
  }
});


