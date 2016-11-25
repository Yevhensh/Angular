'use strict';
module.exports = angular
    .module('app.login.component.login', [])
    .component('login', {
      templateUrl: '/app/js/login/components/login.template.html',
      controller: LoginController
    });

LoginController.$inject = ['$state', 'Auth', 'messages', 'Type', '$window'];
function LoginController($state, Auth, messages, Type, $window) {
  var ctrl = this;
  ctrl.failMessage = messages.NO_AUTH;
  ctrl.failResponse = false;
  ctrl.login = login;

  function login(user){
    ctrl.errors = {};
    Auth.login(user)
      .success(function(result){
        if (Type() == 'Parent') {
          $window.location.href = '/dailyreports';
        }
        else {
          $window.location.href = '/main';
        }
        $state.go('main');
      })
      .error(function(response) {
        ctrl.failResponse = true;
    })
  }
}
