var requestComponent = require('./components/request.component.js'),
    requestRoute = require('./request.route.js');

module.exports = angular.module("app.request", [
  // components
  'app.request.component',
  requestRoute.name
]);
