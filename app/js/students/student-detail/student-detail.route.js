'use strict';

module.exports = angular
  .module('app.studentDetail.route', [])
  .config(function($stateProvider) {
    var studentDetail = {
  	  name: 'student',
  	  url: 'students/{studentId}',
      templateUrl: './app/js/students/student-detail/student-detail.template.html',
       controller: 'StudentDetailController'
    };
    $stateProvider.state(studentDetail);
  });
