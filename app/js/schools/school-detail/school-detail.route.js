'use strict';

module.exports = angular
  .module('app.schoolDetail.route', [])
  .config(function($stateProvider) {
    var schoolDetail = {
  	  name: 'school',
  	  url: 'schools/{schoolId}',
      templateUrl: './app/js/schools/school-detail/school-detail.template.html',
       controller: 'SchoolDetailController'
    };
    $stateProvider.state(schoolDetail);
  });
