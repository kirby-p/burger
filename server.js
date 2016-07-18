var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();

app.use(express.static(__dirname + '/public'));

// app.use(bodyParser.urlencoded({
// 	extended: false
// }))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);

var port = 3000;
app.listen(port);