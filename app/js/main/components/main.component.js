'use strict';
module.exports = angular
  .module('app.main.component', ['ngMaterial'])
  .component('appMain', {
    templateUrl: '/app/js/main/components/main.template.html',
    controller: MainController,
    transclude: true
    });

MainController.$inject = ['$scope', 'Auth'];
function MainController($scope, Auth){
  var ctrl = this;
  $scope.currentNavItem = 'home';
  $scope.googleUrl = 'http://google.com';
  ctrl.logout = logout;
  ctrl.isAuthenticated = isAuth;
  var isAuth = false;

  function isAuth() {
    if(!isAuth===Auth.isAuthenticated()) {
      return true
    }
  }
  function logout() {
    Auth.logout();
  }
}
