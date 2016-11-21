'use strict';

module.exports = angular
  .module('app.students.route', [])
  .config(function($stateProvider) {

    $stateProvider.state({
      name: 'students',
      url: '/students',
      templateUrl: '/app/js/students/list/student-list.template.html',
      controller: 'StudentListController'
    }).state({
      name: 'studentEdit',
      url: '/students/{studentId}/edit',
      templateUrl: './app/js/students/edit/student-edit.template.html',
      controller: 'StudentEditController'
    }).state({
      name: 'studentDetail',
      url: 'students/{studentId}',
      templateUrl: './app/js/students/detail/student-detail.template.html',
      controller: 'StudentDetailController'
    }).state({
      name: 'studentCreate',
      url: '/students/new',
      templateUrl: '/app/js/students/create/student-create.template.html',
      controller: 'StudentCreateController'
    });
  });
