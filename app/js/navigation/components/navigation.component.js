var angular = require('angular');
'use strict';

module.exports = angular
    .module('app.navigation.component', [])
    .component('navigation', {
        controller: NavController,
        templateUrl: '/app/js/navigation/components/navigation.template.html'
    });

    NavController.$inject = ['$scope', '$mdSidenav', '$window', 'Auth', 'Type'];

    function NavController($scope, $mdSidenav, $window, Auth, Type){
        $scope.toggleLeft = buildToggler('left');

        $scope.logout = logout;
        $scope.type = Type();
        $scope.isAuthenticated = isAuth;
        var auth = false;

        function isAuth() {
            if(!auth===Auth.isAuthenticated()) {
                return true
            }
        }
        function logout() {
            Auth.logout();
            $window.location.href = '/main';
        }
        
        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            }
        }

    }