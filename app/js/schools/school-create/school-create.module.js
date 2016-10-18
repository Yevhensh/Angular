var schoolCreateController = require('./school-create.controller.js'),
    schoolCreateRoute = require('./school-create.route.js'),
    schoolService = require('../services/schools.service.js');

module.exports = angular.module('app.schoolCreate', [
  schoolCreateController.name,
  schoolCreateRoute.name,
  schoolService.name
]);
