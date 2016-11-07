var requestCreateComponent = require('./components/request-create/requestcreate.component.js'),
	requestService = require('./services/requests.service.js'),
    requestRoute = require('./request.route.js');

module.exports = angular.module("app.request", [
  requestCreateComponent.name,
  requestRoute.name,
  requestService.name
]);