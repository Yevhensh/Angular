var profileComponent  = require('./components/profile.component.js'),
  profileRoute = require('./profile.route.js'),
  profileResources = require('./services/user.services.js'),
  profileService = require('./services/profile.service.js'),
  loginService = require('../login/services/login.service.js');

module.exports = angular.module("app.profile", [
  profileComponent.name,
  profileRoute.name,
  profileResources.name,
  profileService.name,
  loginService.name
]);
