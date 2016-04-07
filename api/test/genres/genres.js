var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Genres', function(){
    it('should list all the genres on /getAllGenres GET', function(done){
        chai.request(server)
            .get('/getAllGenres')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            })
    });

    it('should list all the movies by a genre /getMoviesByGenre/<id> GET', function(done){
        chai.request(server)
            .get('/getMoviesByGenre/28')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.be.a('object');
                done();
            })
    });
});
