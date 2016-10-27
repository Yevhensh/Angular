'use strict';
module.exports = angular
  .module('app.request.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({ 
	  name: 'request',
	  url: '/request', 
	  template: '<request></request>'
	  });
  });