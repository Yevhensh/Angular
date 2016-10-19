var studentCreateController = require('./student-create.controller.js'),
    studentCreateRoute = require('./student-create.route.js'),
    studentService = require('../services/student.service.js');

module.exports = angular.module('app.studentCreate', [
  studentCreateController.name,
  studentCreateRoute.name,
  studentService.name
]);
