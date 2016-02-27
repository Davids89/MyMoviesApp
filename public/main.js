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
    'app',
    'routes'
], function(require, ng){
    'use strict';

    require(['domReady!', function(document){
        ng.bootstrap(document, ['app']);
    }])
});
