var angular = require('angular')
    schoolsComponent = require('./components/schools.component.js'),
    schoolsRoute = require('./schools.route.js'),
    schoolsResource = require('./services/schools.service.js');

module.exports = angular.module('app.schools', [
  schoolsComponent.name,
  schoolsRoute.name,
  schoolsResource.name
]);
