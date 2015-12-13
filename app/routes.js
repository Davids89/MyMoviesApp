var http = require('http');

module.exports = function(app){

    app.get('/', function(req, res){
        res.render("index.ejs");
    });

    app.get('/getPopularMovies', function(req, res){

        http.get('http://api.themoviedb.org/3/movie/popular?api_key=7c45e91d96f141e78609a00969329847',
            function(resp){
                console.log("Respuesta correcta" + resp.statusCode);

                var data = '';//sino da error de undefined (syntaxerror undefined token u

                resp.on('data', function(chunk){

                    data += chunk;
                });

                resp.on('end', function(){
                    try {
                        data = JSON.parse(data.toString());

                        data.results.map(function(movie){
                            console.log(movie.original_title);
                        })
                    } catch (e) {
                        console.log(e);
                    }
                })
        })
    });

    app.get('/popular', function(req, res){
        console.log("hola");
        res.render('popular.ejs');
    });

    app.get('/description', function(req, res){
        res.render('description.ejs');
    });

};