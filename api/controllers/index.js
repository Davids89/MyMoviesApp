var express = require('express');
var movies_api = require('./movies_api');
var genres_api = require('./genres_api');
var cinema_api = require('./cinemas');
var templates = require('./routes');

module.exports = function (app, passport) {

    // ** singup and login ** //
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/mymovies/',
        failureRedirect: '/',
        failureFlash: true
    }));
    
    // ** templates routes **//
    app.get('/popular', templates.getPopularTemplate);
    app.get('/description', templates.getDescriptionTemplate);
    app.get('/mymovies/', templates.getIndexTemplate);
    app.get('/friends', templates.getFriendsTemplate);
    app.get('/', templates.getLandingTemplate);
    
    //** components routes **//
    app.get('/film.component', templates.getFilmComponent);
    
    // *** movies *** //
    app.put('/popular', movies_api.addPopular);
    app.get('/popularMovies', movies_api.getPopularMovies);
    app.get('/movie/:id', movies_api.getMovie);

    // *** genres ** //
    app.get('/genres', genres_api.getAllGenres);
    app.get('/genres/:id', genres_api.getMoviesByGenre);

    // *** cinemas *** //
    app.get('/cinemas', cinema_api.getCinemas);
};
