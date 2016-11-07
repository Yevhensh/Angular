'use strict';
module.exports = angular
  .module('app.request.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
       name: 'requestCreate',
  	   url: '/requests',
  	   template: '<requestcreate></requestcreate>'
	  });
  });