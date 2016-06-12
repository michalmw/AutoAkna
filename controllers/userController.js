'use strict';


angular.module('aknaApp')
  .controller('UserCtrl', function ($scope, $http, loginService) {

     $scope.blad = false;
    $scope.register = function(user) {

        loginService.login(user, $scope);
    }
  });
