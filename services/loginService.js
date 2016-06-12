'use strict';
angular.module('aknaApp').factory('loginService', function($http,$location,sessionService) {
    return {
        login: function(data, scope) {
            console.log('dostałem: ',data);
            $http.post('http://akna.surprise.design:2404/users/login', {
                username: data.username,
                password: data.password
            }, {
                    withCredentials: true
            }).success(function(data) {
                //zalogował
                sessionService.set('user',data.uid);
                $location.path('/aktualizuj');
                    //$location.path('/panel');
            }).error(function(error) {
                //nie zalogował
                scope.blad = true;
                $location.path('/');

            });
        },
        wyloguj: function() {


            sessionService.destroy('user');
            $location.path('/login');
        },
        isLogged: function() {
            if(sessionService.get('user')) return true;
        }
    }
});