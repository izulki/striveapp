import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native'


export default class ToDoListItem extends Component {

    constructor(props) {
        super(props);

        this.state.title = this.props.title;
        this.state.color = this.props.color;
        this.state.details = this.props.details;

     }

     state = {
        title: "",
        details: "",
        color: "#DA6969",
     }


    render() {
        return (
            <View>
                <Text style={[styles.ToDoListItemTitleStyle,  {borderLeftColor: this.state.color}]}>{this.state.title}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    ToDoListItemTitleStyle: {
        marginTop: "1%",
        borderLeftWidth: 5,
        paddingLeft: 20,
        fontSize: 15,
        fontFamily: "Roboto",
    },
})