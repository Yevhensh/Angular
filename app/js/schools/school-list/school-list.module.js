var angular = require('angular'),
    schoolListComponent = require('./components/school-list.component.js'),
    schoolListRoute = require('./school-list.route.js'),
    schoolService = require('../services/schools.service.js');

module.exports = angular.module('app.schoolList', [
  schoolListComponent.name,
  schoolListRoute.name,
  schoolService.name
]);
