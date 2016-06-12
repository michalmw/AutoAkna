'use strict';


angular.module('aknaApp')
  .controller('InstruktorzyListaCtrl', function ($scope, $http) {

    $scope.instruktorzy = '';

    $http
        .get('http://akna.surprise.design:2404/users')
        .then(function(dane) {
            console.log(dane.data);
            $scope.instruktorzy = dane.data;
        });

  });
