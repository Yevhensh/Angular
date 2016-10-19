var studentEditController = require('./student-edit.controller.js'),
    studentEditRoute = require('./student-edit.route.js'),
    studentService = require('../services/student.service.js');

module.exports = angular.module('app.studentEdit', [
  studentEditController.name,
  studentEditRoute.name,
  studentService.name
]);
