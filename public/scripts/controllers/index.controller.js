angular.module('app')

    .controller('indexController', indexController);

indexController.$inject = ['$state'];

function indexController($state){
    
    var index = this;
    
    index.goToPopular = function(){
        $state.go('popular')
    };

    index.goToFriends = function(){
        $state.go('friends');
    }
}