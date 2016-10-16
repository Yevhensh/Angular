var angular = require('angular');
'use strict';
module.exports = angular
  .module('app.main.component', ['ngMaterial'])
  .component('appMain', {
    templateUrl: '/app/js/main/components/main.template.html',
    controller: MainController,
    transclude: true
    });

function MainController($scope){
  var ctrl = this;
  $scope.currentNavItem = 'home';
  $scope.googleUrl = 'http://google.com';
}
