var studentListComponent = require('./student-list.component.js'),
    studentListRoute = require('./student-list.route.js'),
    studentService = require('../services/student.service.js');

module.exports = angular.module('app.studentList', [
  studentListComponent.name,
  studentListRoute.name,
  studentService.name
]);
