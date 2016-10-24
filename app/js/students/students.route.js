'use strict';
module.exports = angular
  .module('app.students.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({
  	  name: 'students',
  	  url: '/students',
  	  template: '<students></students>'
	  });
  });
