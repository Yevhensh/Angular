'use strict';

module.exports = angular
  .module('app.schoolCreate.route', [])
  .config(function($stateProvider) {
    var schoolCreate = {
  	  name: 'schoolCreate',
  	  url: '/schools/new',
  	  templateUrl: './app/js/schools/school-create/school-create.template.html',
      controller: 'SchoolCreateController'
    };
    $stateProvider.state(schoolCreate);
});
