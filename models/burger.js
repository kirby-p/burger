var orm = require('../config/orm.js');

// orm.selectAll('burgers', 'devoured', 0);

// orm.insertOne('burgers', 'Adobo Whopper');

// orm.updateOne('burgers', 'Adobo Whopper');
orm.selectAll('burgers', 'devoured', 0);
orm.selectAll('burgers', 'devoured', 1);

module.exports = server;