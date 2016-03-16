var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');

// *** routes ***//

var routes = require('./api/controllers/index.js');

// *** express instance *** //

var app = express();

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

// *** config middleware *** //

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(cookieParser());

// *** main routes *** //

app.use('/', routes);

app.listen(8080, function(){
    console.log("Server running in http://localhost:8080");
});

module.exports = app;
