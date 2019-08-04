import React, { Component } from 'react';
import {Modal, Text, StyleSheet, View, StatusBar, Dimensions, TouchableHighlight} from 'react-native';
import DatePicker from './datepicker'
import WelcomeText from './welcomeText'
import DailyToDoCard from './dailyToDoCard'
import Navbar from '../navbar/navbar'
import AddButton from '../addAction/addButton'
import ToDoListModal from '../addAction/toDoListModal'


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

     }

    componentDidMount() {
    }

    state = {
        modalVisible: false,
      };
    
      setModalVisible() {
        this.setState({modalVisible: !this.state.modalVisible});
      }

    render() {
        return (
            <View style={styles.dashboardContainer}>
                <AddButton callback={this.setModalVisible.bind(this)} />
                <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
                <Navbar />
                <DatePicker />
                <DailyToDoCard />
                <ToDoListModal modalVisible={this.state.modalVisible} callback={this.setModalVisible.bind(this)}/>
            </View>
                
        );
    }
  };
  const styles = StyleSheet.create( {
    dashboardContainer: {
        flex: 1,
    },


  })
