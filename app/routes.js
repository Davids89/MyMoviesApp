module.exports = function(app){

    app.get('/', function(req, res){
        console.log("llego");

        res.render("index.ejs");
    })

};