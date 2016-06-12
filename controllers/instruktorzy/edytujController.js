'use strict';


angular.module('aknaApp')
  .controller('InstruktorzyEdytujCtrl', function ($scope, $http, $routeParams) {
     var currentId = $routeParams.id;

     $scope.instruktor = '';

     $http
        .get('http://akna.surprise.design:2404/users/'+currentId)
        .then(function(instruktor) {
            // console.log('zw:',data);
            $scope.instruktor = instruktor.data;
        });

  });
