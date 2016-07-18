var connection = require('./connection.js');

// object relational mapper (ORM)

var orm = {
    selectAll: function(tableInput, colToSearch, valofCol) {
        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';
        connection.query(queryString, [valofCol], function(err, result) {
            console.log(result);
        });
    },
    insertOne: function(tableInput, newBurger){
        var queryString = 'INSERT INTO ' + tableInput + ' SET ?';
        connection.query(queryString, {burger_name: newBurger, devoured: 0}, function(err, result) {
            console.log('insertOne result: ' + result);
        });    	
    },
    updateOne: function(tableInput, devoured_burger){
        var queryString = 'UPDATE ' + tableInput + ' SET ? WHERE ?';
        connection.query(queryString, [{devoured: true}, {burger_name: devoured_burger}], function(err, result) {
            console.log(result);
        });    	    	
    }
};

module.exports = orm;
