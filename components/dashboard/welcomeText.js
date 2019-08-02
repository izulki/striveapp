import React, { Component } from 'react';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class WelcomeText extends Component {
    constructor(props) {
        super(props);

     }

    componentDidMount() {
    }

    render() {
        return (
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTextStyle}>Good Evening, Irfan</Text>
        </View>
      
        );
    }
  };
  const styles = StyleSheet.create( {
    welcomeContainer: {
        marginTop: height*0.01,
        marginLeft: width*0.04,
    },
    welcomeTextStyle: {
        fontSize: 16,
        fontFamily: "Proxima Nova Bold",
    }
  })
