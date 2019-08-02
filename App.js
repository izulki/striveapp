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
import Dashboard from './components/dashboard/dashboard.js'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeIcon from './components/tabbedBar/homeicon'
import HabitsIcon from './components/tabbedBar/habitsicon'
import ToDoIcon from './components/tabbedBar/todoicon'
import JournalIcon from './components/tabbedBar/journalicon'

// const App = () => {
//   return (
//     <View style={styles.rootContainer}>
//       <View style={styles.navBarContainer}>
//         <Navbar />
//       </View>
//       <View style={styles.contentContainer}>
//         <Dashboard />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//   },

//   navBarContainer: {
//     minHeight: "7%",
//     maxHeight: "7%",
//   },

//   contentContainer: {
//     flex:1,
//     minHeight: "93%",
//     maxHeight: "93%",
//   },


// })

const TabNavigator = createBottomTabNavigator({
  Dashboard: { 
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: <HomeIcon />
    } 
  },
  Habits: { 
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: <HabitsIcon />
    } 
  },
  Add: { screen: Dashboard },
  ToDo: { 
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: <ToDoIcon />
    } 
  },
  Journal: { 
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: <JournalIcon />
    } 
   },
});

export default createAppContainer(TabNavigator);

//export default App;
