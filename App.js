/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Dashboard from './components/dashboard/dashboard.js'

import HomeIcon from './components/tabbedBar/homeicon'
import HabitsIcon from './components/tabbedBar/habitsicon'
import ToDoIcon from './components/tabbedBar/todoicon'
import JournalIcon from './components/tabbedBar/journalicon'


const TabNavigator = createBottomTabNavigator({
  Dashboard: { 
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: (tintColor) => <HomeIcon color={tintColor} />
    } 
  },
  Habits: { 
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: (tintColor) => <HabitsIcon color={tintColor} />
    } 
  },
  ToDo: { 
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: (tintColor) => <ToDoIcon color={tintColor} />
    } 
  },
  Journal: { 
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: (tintColor) => <JournalIcon color={tintColor} />
    } 
   },
}, {
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#DA6969', // active icon color
    inactiveTintColor: '#000000',  // inactive icon color
  }
});

export default createAppContainer(TabNavigator);
