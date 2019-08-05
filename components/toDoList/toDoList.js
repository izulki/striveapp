import React, {Component} from 'react';
import {View, Button} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
var Database = require('../../database.js')

export default class ToDoList extends Component {
    constructor(props) {
        super(props);


     }

     state = {
         db: null,
     }


     deleteAllFromDB() {
        var conn = Database.getConnection();
        let promise = new Promise(function(resolve, reject) {
            conn.transaction(tx => {
                tx.executeSql('DELETE FROM ToDo', [], (tx, results) => {
                    resolve(results);
                });
            });
        });

        promise.then((results) => {
            console.log(results)
        })
     }

    render() {
        return(
            <View>
                <Button onPress={this.deleteAllFromDB} title={"DELETE ALL"}></Button>
            </View>
        )
    }
}