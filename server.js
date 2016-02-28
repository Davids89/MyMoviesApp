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
var database = require('./helpers/database.js');
var http = require('http');
var CronJob = require('cron').CronJob;
var passport = require('passport');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

mongoose.connect(database.url);

//app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
//app.use('/bower_components', express.static(__dirname + '/bower_components'));

//app.set('view engine', 'ejs');

app.use(session({ secret : 'ilovescotchscotchyscotchscotch' }));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

var config = getConfiguration();

require('./controllers/routes.js')(app, passport);
require('./middlewares/session.js')(app, passport);

//api files

//cinema file
//require('./config/addCinemas.js');

//task
new CronJob('00 24 16 * * 3', function(){
    require('./helpers/popularMovies.js');
}, null, true, 'Europe/Madrid');

app.listen(port);
console.log('Servidor funcionando en el puerto ' + port);

function getConfiguration(){
    http.get('http://api.themoviedb.org/3/configuration?api_key=7c45e91d96f141e78609a00969329847', function(resp){
        var data = '';

        resp.on('data', function(chunk){
            data += chunk;
        });

        resp.on('end', function(){
            try{
                require('./controllers/movies_api.js')(app, data);
                require('./controllers/genres_api.js')(app, data);
            }catch(e){
                console.log(e);
            }
        })
    });
}
