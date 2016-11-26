var studentService = require('./services/student.service.js'),
    studentListController = require('./list/student-list.controller.js'),
    studentDetailController = require('./detail/student-detail.controller.js'),
    studentCreateController = require('./create/student-create.controller.js'),
    studentEditController = require('./edit/student-edit.controller.js'),
    studentsRoute = require('./students.route.js');

module.exports = angular.module('app.students', [
  studentService.name,
  studentCreateController.name,
  studentEditController.name,
  studentListController.name,
  studentDetailController.name,
  studentsRoute.name
]);
