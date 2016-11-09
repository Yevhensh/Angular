var angular = require('angular');
'use strict';

module.exports = angular
    .module('app.navigation.component', [])
    .component('navigation', {
        controller: NavController,
        templateUrl: '/app/js/navigation/components/navigation.template.html'
    });

    NavController.$inject = ['$scope', '$mdSidenav', '$window', 'Auth', 'Type', 'UserService'];

    function NavController($scope, $mdSidenav, $window, Auth, Type, UserService){
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
            $window.location.href = '/';
        }

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            }
        }

    //     if (isAuth()) {
    //     $scope.setting = {
    //         userId: Auth.getCurrentUserId()
    //     };
    //     $scope.user = UserService.getUser($scope.setting.userId).then(handleSuccess, handleError);

    //     function handleSuccess(data) {
    //         $scope.user = data.user;
    //     }
    //     function handleError(data) {ctrl.errors = response.data.errors;}
    // }
    }
