/*
    David Luque Quintana
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

console.log(__dirname);

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.set('view engine', 'ejs');

app.use(session({ secret : 'ilovescotchscotchyscotchscotch' }));
app.use(flash());

require('./app/routes.js')(app);

app.listen(port);
console.log('Servidor funcionando en el puerto ' + port);