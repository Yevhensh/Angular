'use strict';

module.exports = angular
  .module('app.students.route', [])
  .config(function($stateProvider) {

    $stateProvider.state({
      name: 'students',
      url: '/students',
      template: '<student-list></student-list>'
    }).state({
      name: 'studentEdit',
      url: '/students/{studentId}/edit',
      template: '<student-edit></student-edit>'
    }).state({
      name: 'studentDetail',
      url: 'students/{studentId}',
      template: '<student-detail></student-detail>'
    }).state({
      name: 'studentCreate',
      url: '/students/new',
      template: '<student-create></student-create>'
    });
  });
