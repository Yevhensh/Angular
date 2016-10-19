'use strict';

module.exports = angular
  .module('app.studentCreate.route', [])
  .config(function($stateProvider) {
    var studentCreate = {
  	  name: 'studentCreate',
  	  url: '/students/new',
  	  templateUrl: './app/js/students/student-create/student-create.template.html',
       controller: 'StudentCreateController'
    };
    $stateProvider.state(studentCreate);
});
