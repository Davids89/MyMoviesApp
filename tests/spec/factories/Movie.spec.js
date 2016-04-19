describe('Testing Movie model', function(){

    var Movie;

    var movie = {
        "_id": "56dc0827783bc2bdb9da5ab1",
        "poster_path": "https://image.tmdb.org/t/p/w154/4f3GeC1Dz24xsbESzgqACrWihjX.jpg",
        "adult": false,
        "overview": "Película basada en los cómics de Charles Schulz, \"Peanuts\", conocidos fuera de Estados Unidos por algunos de sus personajes: Snoopy o Charlie Brown. (FILMAFFINITY)",
        "release_date": "2015-11-05",
        "id": 227973,
        "original_title": "The Peanuts Movie",
        "original_language": "en",
        "title": "Carlitos y Snoopy: La película de Peanuts",
        "vote_count": 202,
        "__v": 0,
        "popular": true,
        "production_companies": [],
        "cast": [],
        "genre_ids": [
            35,
            16,
            10751,
            12
        ]
    };

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function(_Movie_){
        Movie = _Movie_;
    }));

    it('it should create an object', function(){
        var _movie = new Movie(movie);

        expect(_movie).toBeDefined();
    })

});