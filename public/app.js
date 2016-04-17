define([
    'angular',
    'routes'
], function(angular, routes){
    'use strict';

    var app = angular.module('app', []);
    app.config(routes);
});
