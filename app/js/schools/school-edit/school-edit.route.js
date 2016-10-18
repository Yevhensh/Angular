'use strict';

module.exports = angular
  .module('app.schoolEdit.route', [])
  .config(function($stateProvider) {
    var schoolUpdate = {
  	  name: 'schoolEdit',
  	  url: '/schools/{schoolId}/edit',
  	  templateUrl: './app/js/schools/school-edit/school-edit.template.html',
      controller: 'SchoolEditController'
    };
    $stateProvider.state(schoolUpdate);
});
