var connection = require('./connection.js');

// object relational mapper (ORM)

var orm = {
    selectAll: function(tableInput) {
        var queryString = 'SELECT * FROM ' + tableInput;
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    },
    insertOne: function(tableInput, newBurger){
        var queryString = 'INSERT INTO ' + tableInput + ' SET ?', {burger_name: newBurger, devoured: 0};
        connection.query(queryString, function(err, result) {
            console.log(result);
        });    	
    },
    updateOne: function(tableInput, devoured_burger){
        var queryString = 'UPDATE ' + tableInput + ' SET ? WHERE ?', [{devoured: 1}, {burger_name: devoured_burger}];
        connection.query(queryString, function(err, result) {
            console.log(result);
        });    	    	
    }
};

module.exports = orm;
