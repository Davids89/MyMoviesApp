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
var http = require('http');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

mongoose.connect(database.url);

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs');

app.use(session({ secret : 'ilovescotchscotchyscotchscotch' }));
app.use(flash());

var config = getConfiguration();

require('./app/routes/routes.js')(app);

//api files


//cinema file
//require('./config/addCinemas.js');

//app.listen(port);
//console.log('Servidor funcionando en el puerto ' + port);

function getConfiguration(){
    http.get('http://api.themoviedb.org/3/configuration?api_key=7c45e91d96f141e78609a00969329847', function(resp){
        var data = '';

        resp.on('data', function(chunk){
            data += chunk;
        });

        resp.on('end', function(){
            try{
                require('./app/api/movies_api.js')(app, data);
            }catch(e){
                console.log(e);
            }
        })
    });
}
