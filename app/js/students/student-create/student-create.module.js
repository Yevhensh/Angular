var studentCreateComponent = require('./studentcreate.component.js'),
    studentCreateRoute = require('./student-create.route.js'),
    studentService = require('../services/student.service.js');

module.exports = angular.module('app.studentCreate', [
  studentCreateComponent.name,
  studentCreateRoute.name,
  studentService.name
]);
