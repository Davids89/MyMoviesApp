require.config({

    paths : {
        'domReady' : '../bower_components/requirejs-domready/domReady',
        'angular' : '../bower_components/angular/angular.min'
    },

    shim : {
        'angular': {
            exports : 'angular'
        }
    }
});

define([
    'require',
    'angular',
    'app'
], function(require, angular, app){
    'use strict';

    angular.bootstrap(['app']);
});
