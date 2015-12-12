module.exports = function(app){

    app.get('/', function(req, res){
        res.render("index.ejs");
    });

    app.get('/popular', function(req, res){
        console.log("hola");
        res.render('popular.ejs');
    });

    app.get('/description', function(req, res){
        res.render('description.ejs');
    });

};