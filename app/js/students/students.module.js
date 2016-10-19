var studentListModule = require('../students/student-list/student-list.module.js'),
    studentDetailModule = require('../students/student-detail/student-detail.module.js'),
    studentCreateModule = require('../students/student-create/student-create.module.js'),
    studentEditModule = require('../students/student-edit/student-edit.module.js');

module.exports = angular.module("app.students", [
  studentCreateModule.name,
  studentEditModule.name,
  studentListModule.name,
  studentDetailModule.name,
]);
