import React, { Component } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import moment from "moment";

var parseDate = (time, offset) => {
    let dateStr = "";
    if (offset > 0) {
        dateStr = moment(time).add(offset, 'days').format('llll');
    }
    if (offset < 0) {
        dateStr = moment(time).subtract(Math.abs(offset), 'days').format('llll');
    }
    if (offset == 0 ) {
        dateStr = moment(time).format('llll');
    }
    let dateArr = (dateStr.split(/[,\ ]/));
    var dateObj = { 
        weekday: dateArr[0].toUpperCase(),
        day: dateArr[3]
    }
    return dateObj;
}

export default class SelectedDate extends Component {
    state = {
        weekday: "null",
        day: "null",
    }
    componentDidMount() {
        dateObj = parseDate(this.props.currentTime, this.props.dateOffset);

        this.setState({
            weekday: dateObj.weekday,
            day: dateObj.day,
        })

    }
    render() {
        return (
            <View style={styles.selectedDateContainer}>
                <View style={styles.weekdayContainer}><Text style={styles.weekday}>{this.state.weekday}</Text></View>
                <View style={styles.dayContainer}><Text style={styles.day}>{this.state.day}</Text></View>
            </View>
            

        );
    }
  };

  const styles = StyleSheet.create( {
    selectedDateContainer: {
        flex: 1,
        flexDirection: "column",
        marginTop: 10,
        maxHeight: '7.5%',
        maxWidth: '14.28%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    weekdayContainer: {
        flex: 1,
        //backgroundColor: 'pink',
        fontFamily: "Proxima Nova Bold",
    },
    dayContainer: {
        flex: 2,
        //backgroundColor: 'grey',
    },
    day: {
        fontFamily: "Proxima Nova Bold",
        fontSize: 20,
        color: '#e26c6c'
    },
    weekday: {
        fontFamily: "Proxima Nova Bold",
        //color: '#bfbfbf',
        color: 'black',
        fontSize: 12
    }
  })