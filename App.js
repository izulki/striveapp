/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import Navbar from './components/navbar/navbar.js';
import DatePicker from './components/dashboard/datepicker.js'

const App = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.navBarContainer}>
        <Navbar />
      </View>
      <View style={styles.contentContainer}>
        <DatePicker />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  navBarContainer: {
    minHeight: "7%",
    maxHeight: "7%",
  },

  contentContainer: {
    minHeight: "93%",
    maxHeight: "93%",
  },


})

export default App;
