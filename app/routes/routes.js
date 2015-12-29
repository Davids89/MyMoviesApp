var http = require('http');

module.exports = function(app){

    app.get('/', function(req, res){
        res.render("index.ejs");
    });

    app.get('/popular', function(req, res){
        res.render('popular.ejs');
    });

    app.get('/description', function(req, res){
        res.render('description.ejs');
    });

};
