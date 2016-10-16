var angular = require('angular');

var coreServices  = require('../../common/core.services.js');

module.exports = angular
    .module("app.schools.resource", [
      coreServices.name,
      require('angular-resource')])
    .factory("schoolsResource",schoolsResource);

schoolsResource.$inject = ['$resource','appSettings'];

function schoolsResource($resource,appSettings){
        return $resource(appSettings.SERVER_PATH + "schools",null);
    }
