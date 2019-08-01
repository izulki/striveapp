import React, { Component } from 'react';
import {Text} from 'react-native';
import moment from "moment";


const getDates = () => {
    const datesArray = new Array(14);
    var now = moment.now();
    datesArray[7] = moment(now); 
    var subCount = 1;
    var addCount = 1;

    for(var i=6; i>-1; i--){
        datesArray[i] = moment(now).subtract(subCount, 'day');
        subCount++;
    }
    for(var j=8; j<15; j++) {
        datesArray[j] = moment(now).add(addCount, 'day');
        addCount++;
    }
    console.log(datesArray);
    return moment.now();
}

export default class DatePicker extends Component {
    
    state = {
        unixTime: 0,
    }

    componentDidMount() {
        getDates();
    }

    render() {
        return (
            <Text>Unix Time: {this.state.unixTime}</Text>
        );
    }

  };
