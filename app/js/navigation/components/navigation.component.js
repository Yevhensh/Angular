'use strict';

module.exports = angular
    .module('app.navigation.component')
    .component('navigation', {
        controller: NavController,
        templateUrl: '/app/js/navigation/components/navigation.template.html'
    });

    NavController.$inject = ['$scope', '$timeout', '$mdSidenav'];

    function NavController($scope, $timeout, $mdSidenav){
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            }
        }
    }