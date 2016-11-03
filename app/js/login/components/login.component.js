'use strict';
module.exports = angular
    .module('app.login.component.login', [])
    .component('login', {
      templateUrl: '/app/js/login/components/login.template.html',
      controller: LoginController
    });

LoginController.$inject = ['$state', 'Auth', '$window', 'messages'];
function LoginController($state, Auth, $window, messages) {
  var ctrl = this;
  ctrl.failMessage = messages.NO_AUTH;
  ctrl.failResponse = false;
  ctrl.login = login;

  function login(user){
    ctrl.errors = {};
    Auth.login(user)
      .success(function(result){
          $window.location.href = '/main';
          console.log(result)
      })
      .error(function(response) {
        ctrl.failResponse = true;
    })
  }
}
