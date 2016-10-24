var studentService = require('./student.service.js'),
    studentListComponent = require('./list/student-list.component.js'),
    studentDetailComponent = require('./detail/student-detail.component.js'),
    studentCreateComponent = require('./create/student-create.component.js'),
    studentEditComponent = require('./edit/student-edit.component.js'),
    studentsRoute = require('./students.route.js');

module.exports = angular.module('app.students', [
  studentService.name,
  studentCreateComponent.name,
  studentEditComponent.name,
  studentListComponent.name,
  studentDetailComponent.name,
  studentsRoute.name
]);
