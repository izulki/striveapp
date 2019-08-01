import React, { Component } from 'react';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import moment from "moment";
import SelectedDate from './selectedDate';
import NonSelectedDate from './nonselectedDate';


var offset = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
var currentTime = moment.now();
const { width } = Dimensions.get('window');

export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.scrollView = null;
     }

    componentDidMount() {
    }


    render() {
        return (
        <ScrollView 
        ref={scrollView => {
                if(scrollView !== null && this.scrollView !== scrollView){
                    console.log("NOT NULL");
                    this.scrollView = scrollView;
                    setTimeout(() => {
                        this.scrollView.scrollTo({animated: true, x: width/1.75});
                    }, 1);

                   
                } else {
                    console.log("NULL");
                }
            }
        }

        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.datepickerContainer}
        horizontal= {true}
        contentContainerStyle={{justifyContent: 'center',}}>
        <View style={styles.view2}><NonSelectedDate currentTime={currentTime} dateOffset={offset[0]}/></View>
        <View style={styles.view}><NonSelectedDate currentTime={currentTime} dateOffset={offset[1]}/></View>
        <View style={styles.view2}><NonSelectedDate currentTime={currentTime} dateOffset={offset[2]}/></View>
        <View style={styles.view}><NonSelectedDate currentTime={currentTime} dateOffset={offset[3]}/></View>
        <View style={styles.view2}><NonSelectedDate currentTime={currentTime} dateOffset={offset[4]}/></View>
        <View style={styles.view}><NonSelectedDate currentTime={currentTime} dateOffset={offset[5]}/></View>
        <View style={styles.view2}><NonSelectedDate currentTime={currentTime} dateOffset={offset[6]}/></View>
        <View style={styles.view}><SelectedDate currentTime={currentTime} dateOffset={offset[7]}/></View>
        <View style={styles.view2}><NonSelectedDate currentTime={currentTime} dateOffset={offset[8]}/></View>
        <View style={styles.view}><NonSelectedDate currentTime={currentTime} dateOffset={offset[9]}/></View>
        <View style={styles.view2}><NonSelectedDate currentTime={currentTime} dateOffset={offset[10]}/></View>
        <View style={styles.view}><NonSelectedDate currentTime={currentTime} dateOffset={offset[11]}/></View>
        <View style={styles.view2}><NonSelectedDate currentTime={currentTime} dateOffset={offset[12]}/></View>
        <View style={styles.view}><NonSelectedDate currentTime={currentTime} dateOffset={offset[13]}/></View>
        <View style={styles.view}><NonSelectedDate currentTime={currentTime} dateOffset={offset[14]}/></View>
      </ScrollView>
      
        );
    }

  };

  const styles = StyleSheet.create( {
    datepickerContainer: {
        marginTop: 5,
        flex: 1,
        maxHeight: '7.5%',
    },
    view: {
        width: width*0.1428,
      },
      view2: {
        width: width*0.1428,
      },
  })
