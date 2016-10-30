var teacherService = require('./services/teacher.service.js'),
    teacherListComponent = require('./list/teacher-list.component.js'),
    teacherDetailComponent = require('./detail/teacher-detail.component.js'),
    teacherCreateComponent = require('./create/teacher-create.component.js'),
    teacherEditComponent = require('./edit/teacher-edit.component.js'),
    teachersRoute = require('./teachers.route.js');

module.exports = angular.module('app.teachers', [
  teacherService.name,
  teacherCreateComponent.name,
  teacherEditComponent.name,
  teacherListComponent.name,
  teacherDetailComponent.name,
  teachersRoute.name
]);
