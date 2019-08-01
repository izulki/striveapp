import React, { Component } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import moment from "moment";
import SelectedDate from './selectedDate';
import NonSelectedDate from './nonselectedDate';


var offset = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
var currentTime = moment.now();


export default class DatePicker extends Component {
    state = {
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.datepickerContainer}>
                <NonSelectedDate currentTime={currentTime} dateOffset={offset[4]}/>
                <NonSelectedDate currentTime={currentTime} dateOffset={offset[5]}/>
                <NonSelectedDate currentTime={currentTime} dateOffset={offset[6]}/>
                <SelectedDate currentTime={currentTime} dateOffset={offset[7]}/>
                <NonSelectedDate currentTime={currentTime} dateOffset={offset[8]}/>
                <NonSelectedDate currentTime={currentTime} dateOffset={offset[9]}/>
                <NonSelectedDate currentTime={currentTime} dateOffset={offset[10]}/>
            </View>
        );
    }

  };

  const styles = StyleSheet.create( {
    datepickerContainer: {
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        maxHeight: '7.5%',
    }
  })
