function importTest(name, path){
    describe(name, function(){
        require(path);
    });
}

describe('Importing all tests', function(){
    importTest('Testing movies', './movies/movies');
    importTest('Testing genres', './genres/genres');
    importTest('Testing cinemas','./cinemas/cinemas');
});
