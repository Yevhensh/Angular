var schoolDetailController = require('./school-detail.controller.js'),
    schoolDetailRoute = require('./school-detail.route.js'),
    schoolService = require('../services/schools.service.js');

module.exports = angular.module('app.schoolDetail', [
  schoolDetailController.name,
  schoolDetailRoute.name,
  schoolService.name,
]);

