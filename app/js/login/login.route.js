'use strict';

module.exports = angular
  .module('app.login.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
	  name: 'login',
	  url: '/login',
	  template: '<login></<login>'
	  });
  });
