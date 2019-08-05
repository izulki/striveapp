'use strict';
import React from 'react';
import SQLite from 'react-native-sqlite-storage';

let conn = SQLite.openDatabase(
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



class Database  {
    getConnection() {
        return conn;
    }
}

module.exports = new Database();