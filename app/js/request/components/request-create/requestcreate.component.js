var angular = require('angular');
'use strict';

module.exports = angular
    .module('app.requestcreate.component', ['ngMaterial'])
    .component('requestcreate', {
        templateUrl: '/app/js/request/components/request-create/request-create.template.html',
        controller: RequestCreateController,
    });
RequestCreateController.$inject = ['$scope', '$state', 'Request'];    
function RequestCreateController($scope, $state, Request) {
    $scope.request = new Request();
    $scope.addRequest = function() {
      $scope.request.$save(function() {
        $state.go('startpage');
      });
    }
} 