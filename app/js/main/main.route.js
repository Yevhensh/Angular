'use strict';
module.exports = angular
  .module('app.main.route', [])
  .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state({
        name: 'main',
        url: '/main',
        template: '<app-main></app-main>'
      });
  });
