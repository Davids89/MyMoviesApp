var express = require('express');
var router = express.Router();
var movies_api = require('./movies_api');

router.get('/popularMovies', movies_api.getPopularMovies);

module.exports = router;
