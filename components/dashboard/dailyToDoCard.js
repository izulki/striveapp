import React, { Component } from 'react';
import {Text, StyleSheet, View, FlatList, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import SQLite from 'react-native-sqlite-storage';
import ToDoListItem from './toDoListItem.js'
var Database = require('../../database.js')

export default class DailyToDoCard extends Component {

    constructor(props) {
        super(props);

        var conn = Database.getConnection();
        this.state.db = conn;
     }


     state = {
         db: null,
         ToDoArray: [],
         refresh: this.props.refresh,
     }

     componentWillReceiveProps(nextProps) {
          this.getToDoDataFromDB();
          this.setState({ refresh: nextProps.refresh });
      }


     getToDoDataFromDB() {
        let db = this.state.db;
        let promise = new Promise(function(resolve, reject) {
            db.transaction(tx => {
                tx.executeSql('SELECT * FROM ToDo', [], (tx, results) => {
                    const rows = results.rows;
                    let users = [];
                    for (let i = 0; i < rows.length; i++) {
                        users.push({
                        ...rows.item(i),
                        });
                    }
                    resolve(users);
                });
            });
        });


        promise.then((array) => {
            this.setState({ToDoArray: array});
            console.log(this.state.ToDoArray)
        })
     }

    componentDidMount () {
        this.getToDoDataFromDB();
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

                    <View style={styles.ToDoListItemsView}>
                    <FlatList
                        data={this.state.ToDoArray}
                        keyExtractor={item => item.ID.toString()}
                        renderItem={({ item }) => (
                            <ToDoListItem color={item.Color} title={item.Title} details={item.Desc} />
                        )}
                    />
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
    ToDoListItemsView: {
        flex: 1,
        marginLeft: '5%',
        marginRight: '5%',
    },


    toDoHeadingStyle: {
        fontFamily: "Proxima Nova Bold",
        fontSize: 16
    }
  })
