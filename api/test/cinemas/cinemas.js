var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Cinemas', function(){
    it('it should get all the cinemas on /getCinemas GET', function(done){
        chai.request(server)
            .get('/getCinemas')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });
});
