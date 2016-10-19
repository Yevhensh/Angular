'use strict';

module.exports = angular
  .module('app.studentList.route', [])
  .config(function($stateProvider) {
    var studentList = {
  	  name: 'students',
  	  url: '/students',
  	  template: '<student-list></student-list>'
    };
    $stateProvider.state(studentList);
});
