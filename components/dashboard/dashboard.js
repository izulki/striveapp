import React, { Component } from 'react';
import {Text, StyleSheet, View, StatusBar, Dimensions} from 'react-native';
import DatePicker from './datepicker'
import WelcomeText from './welcomeText'
import DailyToDoCard from './dailyToDoCard'
import Navbar from '../navbar/navbar'



export default class Dashboard extends Component {
    constructor(props) {
        super(props);

     }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.dashboardContainer}>
                 <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
                <Navbar />
                <DatePicker />
                {/* <WelcomeText /> */}
                <DailyToDoCard />
            </View>
                
        );
    }
  };
  const styles = StyleSheet.create( {
    dashboardContainer: {
        flex: 1,
    },


  })
