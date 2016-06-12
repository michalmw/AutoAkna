'use strict';

var myApp = angular.module('aknaApp',['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'view/user/start.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'view/user/login.html',
        controller: 'UserCtrl'
      })
      .when('/register', {
        templateUrl: 'view/user/register.html',
        controller: 'UserCtrl'
      })
      .when('/aktualizuj', {
        templateUrl: 'view/user/update.html',
        controller: 'UserCtrl'
      })
       .when('/instruktorzy', {
        templateUrl: 'view/user/lista.html',
        controller: 'InstruktorzyListaCtrl'
      })
       .when('/instruktor-dodaj', {
        templateUrl: 'view/user/register.html',
        controller: 'InstruktorzyDodajCtrl'
      })
       .when('/instruktor/:id', {
        templateUrl: 'view/user/update.html',
        controller: 'InstruktorzyEdytujCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
})
    .run(function($rootScope, $location, $http, loginService) {
       $rootScope.$on('$routeChangeStart', function() {

          if(!loginService.isLogged()) {


              $rootScope.zalogowany = false;
              $location.path('/login');
          } else {


              $rootScope.zalogowany = true;
          }


      });
       $rootScope.wyloguj = function() {
        loginService.wyloguj();
       };

  });
