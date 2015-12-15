/*
    David Luque Quintana
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var flash = require('connect-flash');
var mongoose = require('mongoose');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var database = require('./config/database.js');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

mongoose.connect(database.url);

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.set('view engine', 'ejs');

app.use(session({ secret : 'ilovescotchscotchyscotchscotch' }));
app.use(flash());

require('./app/routes/routes.js')(app);

//api files
require('./app/api/movies_api.js')(app);

app.listen(port);
console.log('Servidor funcionando en el puerto ' + port);