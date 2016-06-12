'use strict';


angular.module('aknaApp')
  .controller('InstruktorzyDodajCtrl', function ($scope, $http, loginService, $location) {

     $scope.dodawanie = function(user) {

        // loginService.login(user, $scope);
        $http
        .post('http://akna.surprise.design:2404/users',user)
        .then(function(info) {
          $location.path('/instruktorzy');

        });
    }

  });
