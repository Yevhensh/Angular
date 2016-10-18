var schoolEditController = require('./school-edit.controller.js'),
    schoolEditRoute = require('./school-edit.route.js'),
    schoolService = require('../services/schools.service.js');

module.exports = angular.module('app.schoolEdit', [
  schoolEditController.name,
  schoolEditRoute.name,
  schoolService.name
]);
