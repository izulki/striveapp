import React, { Component } from 'react';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class DailyToDoCard extends Component {
    constructor(props) {
        super(props);
     }

    componentDidMount() {
    }

    render() {
        return (
        <View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.toDoHeadingContainer}>
                        <Text style={styles.toDoHeadingStyle}>To Do List</Text>
                        <Text style={styles.toDoHeadingStyle}>Today</Text>
                    </View>

                </View>
            </View>
        </View>
        );
    }
  };
  const styles = StyleSheet.create( {
    cardContainer: {
        marginTop: height*0.01,
        marginLeft: width*0.04,
        marginRight: width*0.04,
    },
    card: {
        borderRadius: 15,
        width: '100%',
        minHeight: height*0.35,
        backgroundColor: 'white',
        elevation:50,
    },
    toDoHeadingContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        maxHeight: '10%',
    },
    toDoHeadingStyle: {
        fontFamily: "Proxima Nova Bold",
        fontSize: 16
    }
  })
