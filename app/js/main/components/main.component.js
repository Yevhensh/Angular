'use strict';

module.exports = angular
  .module('app.main.component', ['ngMaterial', 'naif.base64'])
  .component('appMain', {
    templateUrl: '/app/js/main/components/main.template.html',
    controller: MainController,
    transclude: true
  });

MainController.$inject = ['$scope', 'Auth', 'Type'];
function MainController($scope, Auth, Type){
  $scope.currentNavItem = 'home';
  $scope.googleUrl = 'http://google.com';
  $scope.logout = logout;
  function setType(){
      $scope.type = Type();
  }

  $scope.isAuthenticated = isAuth;
  var auth = false;

  function isAuth() {
    if(!auth===Auth.isAuthenticated()) {
      return true
    }
  }
  function logout() {
    Auth.logout();
  }
  setType();
}
