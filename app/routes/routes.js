var http = require('http');

module.exports = function(app, passport){

    app.get('/', function(req, res){
        res.render("index.ejs");
    });

    app.get('/popular', function(req, res){
        res.render('popular.ejs');
    });

    app.get('/description', function(req, res){
        res.render('description.ejs');
    });

    app.get('/login/facebook',
        passport.authenticate('facebook', {scope : 'email'}));

    app.get('/login/facebook/return',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        });

};
