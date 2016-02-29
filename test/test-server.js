var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);
console.log(server);

describe('Movies', function(){
    it('should list ALL popular movies on /popularMovies GET', function(done){
        chai.request(server)
            .get('/popularMovies')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });
    it('should list a SINGLE blob on /blob/<id> GET');
    it('should add a SIMPLE blob on /blobs POST');
    it('should update a SINGLE blob on /blob/<id> PUT');
    it('should delete a SINGLE blob on /blob/<id> DELETE');
});
