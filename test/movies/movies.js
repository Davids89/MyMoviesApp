process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../server.js');
var should = chai.should();
var Movie = require('../../models/Movie');

chai.use(chaiHttp);

describe('Movies', function(){

    this.timeout(20000);

    /*Movie.collection.drop();

    beforeEach(function(done){
        var newMovie = new Movie({
            original_title : 'test',
            original_title : 'test_language'
        });

        newMovie.save(function(err){
            console.log("entra");
            done();
        });
    });

    afterEach(function(done){
        Movie.collection.drop();
        done();
    });*/

    it('should update and add popular movies on /getPopular GET', function(done){
        chai.request(server)
            .get('/getPopular')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('SUCCESS');
                done();
            })
    });

    it('should list ALL popular movies on /popularMovies GET', function(done){
        chai.request(server)
            .get('/popularMovies')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('poster_path');
                res.body[0].should.have.property('adult');
                res.body[0].should.have.property('overview');
                res.body[0].should.have.property('release_date');
                res.body[0].should.have.property('id');
                res.body[0].should.have.property('original_title');
                res.body[0].should.have.property('original_language');
                res.body[0].should.have.property('title');
                res.body[0].should.have.property('vote_count');
                res.body[0].should.have.property('popular');
                res.body[0].should.have.property('production_companies');
                res.body[0].should.have.property('cast');
                res.body[0].should.have.property('genre_ids');
                done();
            });
    });

    it('should list a SINGLE movie on /movie/<id> GET', function(done){
        chai.request(server)
            .get('/movie/122917')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.should.be.a('object');
                res.body.should.have.property('_id');
                res.body.should.have.property('poster_path');
                res.body.should.have.property('adult');
                res.body.should.have.property('overview');
                res.body.should.have.property('release_date');
                res.body.should.have.property('id');
                res.body.should.have.property('original_title');
                res.body.should.have.property('original_language');
                res.body.should.have.property('title');
                res.body.should.have.property('vote_count');
                res.body.should.have.property('popular');
                res.body.should.have.property('production_companies');
                res.body.should.have.property('cast');
                res.body.should.have.property('genre_ids');
                done();
            })
    });

    /*it('should update a SINGLE blob on /blob/<id> PUT');
    it('should delete a SINGLE blob on /blob/<id> DELETE');*/
});
