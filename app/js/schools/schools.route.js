'use strict';
module.exports = angular
  .module('app.schools.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
  	  name: 'schools',
  	  url: '/schools',
  	  template: '<schools></schools>'
	  });
  });
