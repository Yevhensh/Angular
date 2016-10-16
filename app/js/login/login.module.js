var angular = require('angular'),
    loginComponent   = require('./components/login.component.js'),
    loginRoute       = require('./login.route.js');
  module.exports = angular.module("app.login", [
    loginComponent.name,
    loginRoute.name,
]);
