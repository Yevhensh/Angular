var studentDetailController = require('./student-detail.controller.js'),
    studentDetailRoute = require('./student-detail.route.js'),
    studentService = require('../services/student.service.js');

module.exports = angular.module('app.studentDetail', [
  studentDetailController.name,
  studentDetailRoute.name,
  studentService.name
]);
