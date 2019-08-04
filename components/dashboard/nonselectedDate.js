import React, { Component } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import moment from "moment";
import Svg, {Circle, Path} from 'react-native-svg';

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
                {/* <View style={styles.dotContainer}><Svg
    height="8"
    width="10"
>
    <Circle
        cx="6"
        cy="4"
        r="3.75"
        fill="rgba(52, 52, 52, 0)"
    />
</Svg></View> */}
            </View>
            

        );
    }
  };

  const styles = StyleSheet.create( {
    selectedDateContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',

    },
    weekdayContainer: {
        flex: 1,
        textAlign: 'center',
        //backgroundColor: 'pink',
    },
    dayContainer: {
        flex: 2,
        //backgroundColor: 'grey',
    },
    dotContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    weekday: {
        textAlign: 'center',
        fontFamily: "Proxima Nova Bold",
        color: '#bdbdbf',
        fontSize: 12
    },
    day: {
        textAlign: 'center',
        fontFamily: "Proxima Nova Bold",
        fontSize: 20,
        color: '#bdbdbf'
    },

  })