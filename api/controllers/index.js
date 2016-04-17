var express = require('express');
var router = express.Router();
var movies_api = require('./movies_api');
var genres_api = require('./genres_api');
var cinema_api = require('./cinemas');
var templates = require('./routes');

module.exports = function(app,passport){
    // ** singup and login ** //
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/popular',
        failureRedirect : '/'
    }));

// ** templates routes **//
    app.get('/popular', templates.getPopularTemplate);
    app.get('/description', templates.getDescriptionTemplate);
    app.get('/', templates.getLandingTemplate);


// *** movies *** //
    app.get('/getPopular', movies_api.addPopular);
    app.get('/popularMovies', movies_api.getPopularMovies);
    app.get('/movie/:id', movies_api.getMovie);

// *** genres ** //
    app.get('/getAllGenres', genres_api.getAllGenres);
    app.get('/getMoviesByGenre/:id', genres_api.getMoviesByGenre);

// *** cinemas *** //
    app.get('/getCinemas', cinema_api.getCinemas);
};