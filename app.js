'use strict';

angular
    .module("autoAkna", [
        "ngRoute"
    ])
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'view/user/login.html',
                controller: 'LoginCtrl'
            })
            .when('/test', {
                templateUrl: 'view/user/test.html',
                controller: 'LoginCtrl'
            });
    });