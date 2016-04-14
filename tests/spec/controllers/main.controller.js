describe('mainController', function(){
    beforeEach(angular.mock.module('app'));

    var $controller, $httpBackend, moviesFactory;

    beforeEach(angular.mock.inject(function(_$controller_, _$httpBackend_, _moviesFactory_){
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        moviesFactory = _moviesFactory_;
    }));

    describe('getData', function(){
        it('it should get data', function(){
            var $scope = {};
            var controller = $controller('mainController', { $scope : $scope});

            $httpBackend.whenGET('/popularMovies').respond(200, [{ movie : {}}]);
            $httpBackend.expect('GET','/popularMovies');

            controller.getDataFromAPI();
            $httpBackend.flush();
            expect(controller.popularMovies.length).toBeGreaterThan(1);

        })
    })
});