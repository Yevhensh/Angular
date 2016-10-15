var angular = require('angular')
    studentsComponent = require('./components/students.component.js'),
    studentsRoute = require('./students.route.js'),
    studentsResource = require('./services/students.service.js');

module.exports = angular.module('app.students', [
  studentsComponent.name,
  studentsRoute.name,
  studentsResource.name
]);
