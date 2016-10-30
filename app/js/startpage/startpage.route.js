'use strict';
module.exports = angular
  .module('app.startpage.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({ 
	  name: 'startpage',
	  url: '/', 
	  template: '<startpage></startpage>'
	  });
  });