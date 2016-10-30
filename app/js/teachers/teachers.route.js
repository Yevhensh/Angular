'use strict';

module.exports = angular
  .module('app.teachers.route', [])
  .config(function($stateProvider) {

    $stateProvider.state({
      name: 'teachers',
      url: '/teachers',
      template: '<teacher-list></teacher-list>'
    }).state({
      name: 'teacherEdit',
      url: '/teachers/{teacherId}/edit',
      template: '<teacher-edit></teacher-edit>'
    }).state({
      name: 'teacherDetail',
      url: 'teachers/{teacherId}',
      template: '<teacher-detail></teacher-detail>'
    }).state({
      name: 'teacherCreate',
      url: '/teachers/new',
      template: '<teacher-create></teacher-create>'
    });
  });


