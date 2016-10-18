'use strict';

module.exports = angular
  .module('app.schoolList.route', [])
  .config(function($stateProvider) {
    var schoolList = {
  	  name: 'schools',
  	  url: '/schools',
  	  template: '<school-list></school-list>'
    };
    $stateProvider.state(schoolList);
});
