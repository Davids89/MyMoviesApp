
var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');


// *** routes ***//

var routes = require('./api/controllers/index.js');

// *** express instance *** //

var app = express();

// *** passport *** //

require('./api/middlewares/passport.js')(passport);

app.use(passport.initialize());
app.use(passport.session());

// *** config file *** //

var config = require('./api/helpers/_config.js');

// *** Mongoose connection *** //

mongoose.connect(config.mongoURI[app.settings.env], function(err, res){
    if(err){
        console.log('Error connecting with database', err);
    }else{
        console.log('Connected to database:', config.mongoURI[app.settings.env]);
    }
});

//set engine
app.set('view engine', 'ejs');

//set static files
app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// *** config middleware *** //

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(cookieParser());

// *** main routes *** //

require('./api/controllers/index.js')(app, passport);

app.listen(8080, function(){
    console.log("Server running in http://localhost:8080");
});

module.exports = app;
