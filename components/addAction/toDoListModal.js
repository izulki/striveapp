import React, {Component} from 'react';
import {Text, TextInput, View, Modal, StyleSheet, Dimensions, Picker} from 'react-native';
import Svg, { G, Path, Circle } from 'react-native-svg'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
import SQLite from 'react-native-sqlite-storage';


export default class ToDoListModal extends Component {


    constructor(props) {
        super(props);

        const db = SQLite.openDatabase(
            {
              name: 'striveDB.db',
              location: 'default',
              createFromLocation: '~www/striveDB.db',
            },
            () => {},
            error => {
              console.log("error");
            }
          );

        this.state.db = db;
     }


    state = {
        db: null,
        titleColor: '#DA6969',
        title: "Title",
        details: "Add some details..."
    }

    updateTitleColor = (color) => {
       this.setState({ titleColor: color })
    }


    clearSaveClose = () => {
        let insertQuery = "INSERT INTO ToDo (Title, Desc, Color) VALUES (" + "'" + this.state.title  + "', " +"'" + this.state.details  + "', " + "'" + this.state.titleColor  + "')";
        let db = this.state.db;
        let promise = new Promise(function(resolve, reject) {
            db.transaction(tx => {
                tx.executeSql(insertQuery, [], (tx, results) => {
                    resolve(results);
                },
                (err) => {
                    reject(err);
                }
                );
            });
        });


        promise.then((results) => {
            this.setState({
                title: "Title",
                details: "Add some details..."
            })

            this.props.callback();
        })

     }

    render() {
        return(
                <Modal
                    animationType="slide"
                    backgroundColor="#fafafa"
                    transparent={true}
                    visible={this.props.modalVisible}>
                    <View style={{flex: 1, flexDirection: 'column', backgroundColor:'#fafafa'}}>
                        {/*Header Container*/}
                        <View style={styles.modalHeaderContainer}>             
                            <View style={styles.xButtonContainer}>
                                    <Text onPress={this.props.callback} style={styles.toDoListModalCancelStyle}>Cancel</Text>
                            </View>
                            <View style={styles.checkButtonContainer}>
                                    <Text onPress={this.clearSaveClose} style={styles.toDoListModalSaveStyle}>Save</Text>
                            </View>

                        </View>



                        {/*Content Container*/}
                        <View style={{marginTop: height*0.01, marginLeft: height*0.02, marginRight: height*0.02}}>
                            <TextInput 
                            style={[styles.textInputTitleStyle, {borderLeftColor: this.state.titleColor}]}
                            onChangeText={(text) => this.setState({title: text})}
                            value={this.state.title}

                            />
                            <TextInput 
                            multiline={true} 
                            style={styles.textInputDetailsStyle}
                            onChangeText={(text) => this.setState({details: text})}
                            value={this.state.details}
                            />
                        </View>

                        <View style={styles.colorPickerContainer}>                      
                        <Picker style={{width: width*0.3}}selectedValue = {this.state.titleColor} onValueChange = {this.updateTitleColor}>
                            <Picker.Item label = "Pink" value = "#DA6969" />
                            <Picker.Item label = "Red" value = "#d23535" />
                            <Picker.Item label = "Green" value = "#36b928" />
                            <Picker.Item label = "Blue" value = "#26adcb" />
                            <Picker.Item label = "Yellow" value = "#efcb73" />
                            <Picker.Item label = "Orange" value = "#e49749" />
                            <Picker.Item label = "Purple" value = "#9f76dc" />
                        </Picker>
                        </View>
                    </View>    

                   
                 </Modal>

        )
    }


}

const styles = StyleSheet.create({
    colorPickerContainer: {
        flexDirection: 'row',
        marginLeft: height*0.01,
        height: height*0.05,
    },


    toDoListModalSaveStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "Roboto",
        textAlign: 'right',
        color: "#DA6969"
    },
    toDoListModalCancelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "Roboto",
    },

    modalHeaderContainer: {
        marginTop: height*0.01,
        marginLeft: width*0.03,
        marginRight: width*0.03,
        maxHeight:'4%',
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    xButtonContainer: {
        flex: 1,
    },
    checkButtonContainer: {
        flex: 1,
    },
    textInputTitleStyle: {
        borderLeftWidth: 5,
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "Roboto",
    },
    textInputDetailsStyle: {
        marginTop: height*0.01,
        padding: 0,
        fontFamily: "Roboto",
        maxWidth: width*0.9,
        maxHeight: height*0.2,
    },


  });
